import { useState } from 'react';
import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import { NicknameForm, ResultView } from '@amp/compositions';

import { IMAGES } from '@shared/assets';
import { ROUTE_PATH } from '@shared/constants/path';

import * as styles from './onboarding.css';

type Step = 1 | 2;

const Onboarding = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [step, setStep] = useState<Step>(1);

  const disabled = step === 1 ? name.trim().length === 0 : false;
  const selected = !disabled;

  const ctaTextByStep: Record<number, string> = {
    1: '다음으로',
    2: '시작하기',
  };

  const handleNext = () => {
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      navigate(ROUTE_PATH.HOME);
    }
  };
  return (
    <div className={styles.container}>
      {step === 1 && (
        <NicknameForm userType='audience' value={name} onChange={setName} />
      )}
      {step === 2 && (
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
          selected={selected}
          disabled={disabled}
          onClick={handleNext}
        >
          {ctaTextByStep[step]}
        </CtaButton>
      </div>
    </div>
  );
};

export default Onboarding;
