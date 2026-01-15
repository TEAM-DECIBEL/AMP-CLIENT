import { ReactNode } from 'react';

import { ICON } from './cta-icon';

import * as styles from './cta-button.css';

export type CtaButtonType = 'primary' | 'gray' | 'social' | 'icon' | 'add';

interface CtaButtonProps {
  children: ReactNode;
  type: CtaButtonType;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const CtaButton = ({
  children,
  type,
  selected,
  disabled,
  onClick,
}: CtaButtonProps) => {
  const isSelected = type === 'icon' && selected === true;
  const Icon = ICON[type];

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      aria-selected={type === 'icon' ? isSelected : undefined}
      className={styles.ctaButton({ type })}
    >
      {Icon ? <Icon /> : null}
      {children}
    </button>
  );
};

export default CtaButton;
