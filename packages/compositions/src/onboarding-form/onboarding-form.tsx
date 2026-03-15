import { type ReactNode, useId } from 'react';

import { Textfield } from '@amp/ads-ui';
import { NoticeIcon } from '@amp/ads-ui/icons';

import * as styles from './onboarding-form.css';

interface OnboardingFormProps {
  title: ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  supportingText: ReactNode;
  maxLength?: number;
  isError?: boolean;
}

const OnboardingForm = ({
  title,
  label,
  placeholder,
  value,
  onChange,
  supportingText,
  maxLength,
  isError = false,
}: OnboardingFormProps) => {
  const inputId = useId();

  return (
    <div className={styles.form}>
      <p className={styles.title}>{title}</p>

      <div className={styles.field}>
        <label className={styles.label} htmlFor={inputId}>
          {label}
        </label>

        <Textfield
          id={inputId}
          variant='default'
          placeholder={placeholder}
          maxLength={maxLength}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <span className={styles.supportingTextContainer}>
          {isError && <NoticeIcon className={styles.icon} />}
          <p className={styles.supportingText({ isError })}>{supportingText}</p>
        </span>
      </div>
    </div>
  );
};

export default OnboardingForm;
