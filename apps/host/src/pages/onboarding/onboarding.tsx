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

type Step = 1 | 2 | 3;

interface OnboardingFormValues {
  organizerName: string;
  registrationCode: string;
}

const Onboarding = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>(1);
  const [isOnboardingError, setIsOnboardingError] = useState(false);

  const { mutate, isPending } = usePostRegistrationVerifyMutation();

  const { control, getValues } = useForm<OnboardingFormValues>({
    defaultValues: {
      organizerName: '',
      registrationCode: '',
    },
    mode: 'onChange',
  });

  const organizerName = useWatch({
    control,
    name: 'organizerName',
    defaultValue: '',
  });

  const registrationCode = useWatch({
    control,
    name: 'registrationCode',
    defaultValue: '',
  });

  const disabledByStep: Record<Step, boolean> = {
    1: organizerName.trim().length === 0,
    2: registrationCode.trim().length === 0 || isOnboardingError,
    3: false,
  };

  const disabled = disabledByStep[step] || isPending;

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
      return;
    }
    if (step === 2) {
      handleVerifyRegistration();
      return;
    }
    navigate(ROUTE_PATH.HOME, { replace: true });
  };

  const handleVerifyRegistration = () => {
    mutate(getValues(), {
      onSuccess: () => {
        setStep(3);
      },
      onError: (error) => {
        if (error instanceof HTTPError && error.code === 'REG_400_001') {
          setIsOnboardingError(true);
          return;
        }
      },
    });
  };

  return (
    <div className={styles.container}>
      {step === 1 && (
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

      {step === 2 && (
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
                if (isOnboardingError) {
                  setIsOnboardingError(false);
                }
                field.onChange(value);
              }}
              supportingText={
                isOnboardingError
                  ? '올바르지 않은 가입코드입니다.'
                  : '가입코드는 AMP 가입안내 문자메시지에 명시되어 있어요.'
              }
              isError={isOnboardingError}
            />
          )}
        />
      )}

      {step === 3 && (
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
          {step === 3 ? '시작하기' : '다음으로'}
        </CtaButton>
      </div>
    </div>
  );
};

export default Onboarding;
