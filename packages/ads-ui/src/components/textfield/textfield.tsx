import { useEffect, useRef, useState } from 'react';

import { CalendarIcon, FlagIcon, LocateIcon, TimeIcon } from '../../icons';
import { formatDateYYYYMMDD, formatTimeHHMM, onlyDigits } from './formatters';

import * as styles from './textfield.css';

interface TextfieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'default' | 'flag' | 'date' | 'time' | 'location';
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

type FormatVariant = 'date' | 'time';

const formatterByVariant: Record<
  FormatVariant,
  (digits: string, isDeleting: boolean) => string
> = {
  date: formatDateYYYYMMDD,
  time: formatTimeHHMM,
};

const iconByVariant = {
  flag: FlagIcon,
  date: CalendarIcon,
  time: TimeIcon,
  location: LocateIcon,
} as const;

const Textfield = ({
  variant,
  value,
  onChange,
  type,
  ...props
}: TextfieldProps) => {
  const isDate = variant === 'date';
  const isTime = variant === 'time';
  const isFormatVariant = isDate || isTime;

  const isControlled = value !== undefined;

  const [innerValue, setInnerValue] = useState<string>('');
  const resolvedValue = isControlled ? value! : innerValue;

  const prevValueRef = useRef<string>(resolvedValue);
  const prevVariantRef = useRef<TextfieldProps['variant']>(variant);

  useEffect(() => {
    if (isControlled) {
      prevValueRef.current = value ?? '';
    }
  }, [isControlled, value]);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (prevVariantRef.current !== variant) {
      prevVariantRef.current = variant;
      prevValueRef.current = resolvedValue;
    }

    if (!isFormatVariant) {
      onChange?.(e);

      const next = e.currentTarget.value;

      if (!isControlled) {
        setInnerValue(next);
      }

      prevValueRef.current = next;
      return;
    }

    const raw = e.currentTarget.value;
    const isDeleting = raw.length < prevValueRef.current.length;

    const digits = onlyDigits(raw);

    const formatted = formatterByVariant[variant as FormatVariant](
      digits,
      isDeleting,
    );

    const syntheticEvent = {
      ...e,
      currentTarget: { ...e.currentTarget, value: formatted },
      target: { ...e.target, value: formatted },
    } as React.ChangeEvent<HTMLInputElement>;
    onChange?.(syntheticEvent);

    if (!isControlled) {
      setInnerValue(formatted);
    }

    prevValueRef.current = formatted;
  };

  const inputMode = isFormatVariant ? 'numeric' : props.inputMode;
  const maxLength = isDate ? 10 : isTime ? 5 : props.maxLength;

  const IconComponent =
    variant !== 'default'
      ? iconByVariant[variant as keyof typeof iconByVariant]
      : null;

  return (
    <div className={styles.textfield({ variant })}>
      {IconComponent && <IconComponent className={styles.icon} />}
      <input
        className={styles.input}
        {...props}
        type={isFormatVariant ? 'text' : type}
        inputMode={inputMode}
        maxLength={maxLength}
        value={resolvedValue}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textfield;
