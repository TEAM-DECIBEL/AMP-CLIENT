import { ReactNode } from 'react';
import clsx from 'clsx';

import * as styles from './cta-button.css';

interface CtaButtonProps {
  children: ReactNode;
  type: 'common' | 'icon';
  htmlType?: 'button' | 'submit' | 'reset';
  color?: 'primary' | 'gray' | 'white';
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

const CtaButton = ({
  children,
  type,
  htmlType = 'button',
  color = 'primary',
  selected,
  disabled,
  className,
}: CtaButtonProps) => {
  return (
    <button
      type={htmlType}
      disabled={disabled}
      aria-pressed={selected}
      className={clsx(styles.ctaButton({ type, color }), className)}
    >
      {children}
    </button>
  );
};

export default CtaButton;
