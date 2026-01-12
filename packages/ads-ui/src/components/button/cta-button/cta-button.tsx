import { GoogleIcon, PenIcon, PlusIcon } from '../../../icons';

import * as styles from './cta-button.css';

type Type = 'primary' | 'gray' | 'social' | 'icon' | 'add';

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
  const getIcon = (type: string) => {
    if (type === 'social') {
      return <GoogleIcon />;
    }
    if (type === 'icon') {
      return <PenIcon />;
    }
    if (type === 'add') {
      return <PlusIcon />;
    }
    return null;
  };

  const icon = getIcon(type);

  return (
    <button
      type='button'
      disabled={disabled}
      onClick={onClick}
      data-selected={isSelected ? 'true' : 'false'}
      className={styles.ctaButton({ type })}
    >
      {icon}
      {children}
    </button>
  );
};

export default CtaButton;
