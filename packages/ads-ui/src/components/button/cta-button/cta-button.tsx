import { GoogleIcon, PenIcon } from '../../../icons';

import * as styles from './cta-button.css';

type Tone = 'primary' | 'gray' | 'social' | 'icon';

interface CtaButtonProps {
  children: React.ReactNode;
  tone: Tone;
  selected?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const CtaButton = ({
  children,
  tone,
  selected,
  disabled,
  onClick,
}: CtaButtonProps) => {
  const isSelected = tone === 'icon' && selected === true;

  const icon =
    tone === 'social' ? <GoogleIcon /> : tone === 'icon' ? <PenIcon /> : null;

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      data-selected={isSelected ? 'true' : 'false'}
      className={styles.ctaButton({ tone })}
    >
      {icon && <span>{icon}</span>}
      {children}
    </button>
  );
};

export default CtaButton;
