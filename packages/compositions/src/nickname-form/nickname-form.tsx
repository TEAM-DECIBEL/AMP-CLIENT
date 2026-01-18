import { useId } from 'react';

import { Textfield } from '@amp/ads-ui';

import * as styles from './nickname-form.css';

interface NicknameFormProps {
  userType: 'host' | 'audience';
  value: string;
  onChange: (value: string) => void;
}

const NICKNAME_MAX_LENGTH = 12;

const NicknameForm = ({ userType, value, onChange }: NicknameFormProps) => {
  const nameLabelMap = { host: '주최사명', audience: '닉네임' } as const;
  const nameLabel = nameLabelMap[userType];
  const inputId = useId();

  return (
    <div className={styles.form}>
      <p className={styles.title}>
        반가워요. <br />
        {nameLabel}을 알려주세요.
      </p>
      <div className={styles.nicknameForm}>
        <label className={styles.label} htmlFor={inputId}>
          {nameLabel}
        </label>
        <Textfield
          id={inputId}
          variant='default'
          placeholder={`${nameLabel}을 입력해주세요.`}
          maxLength={NICKNAME_MAX_LENGTH}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <p className={styles.supportingText}>
          최대 {NICKNAME_MAX_LENGTH}자까지만 입력 가능해요.
        </p>
      </div>
    </div>
  );
};

export default NicknameForm;
