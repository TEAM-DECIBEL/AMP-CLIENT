import React, { useRef, useState } from 'react';

import { CalendarIcon, FlagIcon, TimeIcon } from '../../icons';

import * as styles from './textfield.css';

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'default' | 'flag' | 'date' | 'time';
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const onlyDigits = (s: string) => s.replace(/\D/g, '');

const formatDateYYYYMMDD = (digits: string, isDeleting: boolean) => {
  const d = digits.slice(0, 8);
  const y = d.slice(0, 4);
  const m = d.slice(4, 6);
  const day = d.slice(6, 8);

  if (d.length <= 3) {
    return d;
  }

  if (d.length === 4) {
    return isDeleting ? y : `${y}-`;
  }

  if (d.length <= 6) {
    const ym = `${y}-${m}`;
    if (d.length === 6) {
      return isDeleting ? ym : `${ym}-`;
    }
    return ym;
  }

  return `${y}-${m}-${day}`;
};

const Textfield = ({
  variant,
  value,
  onChange,
  placeholder,
  ...props
}: TextfieldProps) => {
  const isDate = variant === 'date';
  const isControlled = value !== undefined;

  const [innerValue, setInnerValue] = useState<string>('');
  const resolvedValue = isControlled ? value! : innerValue;

  const prevValueRef = useRef<string>(resolvedValue);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (!isDate) {
      onChange?.(e);
      if (!isControlled) {
        setInnerValue(e.target.value);
      }
      prevValueRef.current = e.target.value;
      return;
    }

    const raw = e.target.value;
    const isDeleting = raw.length < prevValueRef.current.length;

    const digits = onlyDigits(raw).slice(0, 8);
    const formatted = formatDateYYYYMMDD(digits, isDeleting);

    // input 값을 formatted로 맞춘 뒤, 원 이벤트로 전달
    (e.currentTarget as HTMLInputElement).value = formatted;
    onChange?.(e);

    if (!isControlled) {
      setInnerValue(formatted);
    }
    prevValueRef.current = formatted;
  };

  const inputMode = isDate ? 'numeric' : props.inputMode;
  const maxLength = isDate ? 10 : props.maxLength;
  const resolvedPlaceholder = isDate
    ? (placeholder ?? '공연 일자')
    : placeholder;

  return (
    <div className={styles.textfield({ variant })}>
      {variant === 'flag' && <FlagIcon className={styles.icon} />}
      {variant === 'date' && <CalendarIcon className={styles.icon} />}
      {variant === 'time' && <TimeIcon className={styles.icon} />}

      <input
        className={styles.input}
        {...props}
        placeholder={resolvedPlaceholder}
        inputMode={inputMode}
        maxLength={maxLength}
        value={resolvedValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textfield;
