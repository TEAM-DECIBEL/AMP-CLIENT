import { useState } from 'react';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { HTTPError } from '@amp/apis';
import { NicknameForm, OnboardingForm, ResultView } from '@amp/compositions';

import { usePostRegistrationVerifyMutation } from '@features/auth/model/mutations';

import { IMAGES } from '@shared/assets/images';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './onboarding.css';

const STEP = {
  NAME: 1,
  CODE: 2,
  COMPLETE: 3,
} as const;

type Step = (typeof STEP)[keyof typeof STEP];

interface OnboardingFormValues {
  organizerName: string;
  registrationCode: string;
}

const DEFAULT_SUPPORTING_TEXT =
  '가입코드는 AMP 가입안내 문자메시지에 명시되어 있어요.';

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(STEP.NAME);

  const { mutate, isPending } = usePostRegistrationVerifyMutation();

  const {
    control,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<OnboardingFormValues>({
    defaultValues: {
      organizerName: '',
      registrationCode: '',
    },
    mode: 'onChange',
  });

  const organizerName = useWatch({
    control,
    name: 'organizerName',
  });

  const registrationCode = useWatch({
    control,
    name: 'registrationCode',
  });

  const hasRegistrationCodeError = Boolean(errors.registrationCode);

  const disabledByStep: Record<Step, boolean> = {
    [STEP.NAME]: organizerName.trim().length === 0,
    [STEP.CODE]:
      registrationCode.trim().length === 0 || hasRegistrationCodeError,
    [STEP.COMPLETE]: false,
  };

  const disabled = disabledByStep[step] || isPending;

  const handleNext = () => {
    if (step === STEP.NAME) {
      setStep(STEP.CODE);
      return;
    }

    if (step === STEP.CODE) {
      handleVerifyRegistration();
      return;
    }

    navigate(ROUTE_PATH.HOME, { replace: true });
  };

  const handleVerifyRegistration = () => {
    clearErrors('registrationCode');

    const { organizerName, registrationCode } = getValues();

    mutate(
      {
        organizerName: organizerName.trim(),
        registrationCode: registrationCode.trim(),
      },
      {
        onSuccess: () => {
          setStep(STEP.COMPLETE);
        },
        onError: (error) => {
          if (error instanceof HTTPError && error.code === 'REG_400_001') {
            setError('registrationCode', {
              type: 'server',
              message: '올바르지 않은 가입코드입니다.',
            });
            return;
          }
        },
      },
    );
  };

  return (
    <div className={styles.container}>
      {step === STEP.NAME && (
        <Controller
          name='organizerName'
          control={control}
          render={({ field }) => (
            <NicknameForm
              userType='host'
              value={field.value}
              onChange={field.onChange}
            />
          )}
        />
      )}

      {step === STEP.CODE && (
        <Controller
          name='registrationCode'
          control={control}
          render={({ field }) => (
            <OnboardingForm
              title={
                <>
                  {organizerName}님 <br />
                  사전 안내된 가입코드를 입력해주세요.
                </>
              }
              label='가입코드'
              placeholder='가입코드를 입력해주세요.'
              value={field.value}
              onChange={(value) => {
                if (errors.registrationCode) {
                  clearErrors('registrationCode');
                }
                field.onChange(value);
              }}
              supportingText={
                errors.registrationCode?.message ?? DEFAULT_SUPPORTING_TEXT
              }
              isError={hasRegistrationCodeError}
            />
          )}
        />
      )}

      {step === STEP.COMPLETE && (
        <div className={styles.ResultViewContainer}>
          <ResultView
            title='주최사 가입이 완료됐어요!'
            description='이제 공연을 등록하고 공지를 올려보세요.'
            image={<img src={IMAGES.LOGIN_COMPLETE} alt='' />}
          />
        </div>
      )}

      <div className={styles.buttonContainer}>
        <CtaButton
          type='common'
          color='gray'
          selected={!disabled}
          disabled={disabled}
          onClick={handleNext}
        >
          {step === STEP.COMPLETE ? '시작하기' : '다음으로'}
        </CtaButton>
      </div>
    </div>
  );
};

export default Onboarding;
