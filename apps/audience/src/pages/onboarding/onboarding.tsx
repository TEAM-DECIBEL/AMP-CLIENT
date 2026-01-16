import { useState } from 'react';

import { CtaButton } from '@amp/ads-ui';
import { NicknameForm } from '@amp/shared';

import * as styles from './onboarding.css';

const Onboarding = () => {
  const [name, setName] = useState('');

  const disabled = name.trim().length === 0;
  const selected = !disabled;

  const handleNext = () => {
    // TODO: 페이지 이동
  };
  return (
    <div className={styles.container}>
      <NicknameForm userType='audience' value={name} onChange={setName} />
      <div className={styles.buttonContainer}>
        <CtaButton
          type='gray'
          selected={selected}
          disabled={disabled}
          onClick={handleNext}
        >
          다음으로
        </CtaButton>
      </div>
    </div>
  );
};

export default Onboarding;
