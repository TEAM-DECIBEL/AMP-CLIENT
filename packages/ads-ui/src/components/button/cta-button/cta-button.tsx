import { GoogleIcon, PenIcon } from '../../../icons';

import * as styles from './cta-button.css';

type Type = 'primary' | 'gray' | 'social' | 'icon';

interface CtaButtonProps {
  children: React.ReactNode;
  type: Type;
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

  const icon =
    type === 'social' ? <GoogleIcon /> : type === 'icon' ? <PenIcon /> : null;

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      data-selected={isSelected ? 'true' : 'false'}
      className={styles.ctaButton({ type })}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default CtaButton;
