import { AmpFlagGradientIcon, AmpFlagIcon } from '@amp/ads-ui/icons';

import * as styles from './flag-button.css';

interface FlagButtonProps {
  selected: boolean;
  onChange: () => void;
  disabled?: boolean;
  festivalId: number;
}

const FlagButton = ({
  selected,
  onChange,
  disabled,
  festivalId,
}: FlagButtonProps) => {
  return (
    <button
      type='button'
      className={styles.flagButton}
      aria-label='관람 예정 공연 선택'
      aria-pressed={selected}
      onClick={(e) => {
        e.stopPropagation();
        onChange();
      }}
      disabled={disabled}
    >
      {selected ? (
        <AmpFlagGradientIcon
          key={`gradient-flag-${festivalId}`}
          className={styles.icon}
        />
      ) : (
        <AmpFlagIcon
          key={`normal-flag-${festivalId}`}
          className={styles.icon}
        />
      )}
    </button>
  );
};

export default FlagButton;
