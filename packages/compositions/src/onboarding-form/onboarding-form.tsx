import { type ReactNode, useId } from 'react';

import { Textfield } from '@amp/ads-ui';

import * as styles from './onboarding-form.css';

interface OnboardingFormProps {
  title: ReactNode;
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  supportingText: ReactNode;
  maxLength?: number;
}

const OnboardingForm = ({
  title,
  label,
  placeholder,
  value,
  onChange,
  supportingText,
  maxLength,
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
        <p className={styles.supportingText}>{supportingText}</p>
      </div>
    </div>
  );
};

export default OnboardingForm;
