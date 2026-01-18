import clsx from 'clsx';
import type { ReactNode } from 'react';

import * as styles from './cta-button.css';

export type CtaButtonType =
  | 'primary'
  | 'gray'
  | 'social'
  | 'icon'
  | 'add'
  | 'alert';

interface CtaButtonProps {
  children: ReactNode;
  type: 'common' | 'icon';
  color?: 'primary' | 'gray' | 'white';
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
  className?: string;
}

const CtaButton = ({
  children,
  type,
  color = 'primary',
  selected,
  disabled,
  className,
  onClick,
}: CtaButtonProps) => {
  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      aria-pressed={selected}
      className={clsx(styles.ctaButton({ type, color }), className)}
    >
      {children}
    </button>
  );
};

export default CtaButton;
