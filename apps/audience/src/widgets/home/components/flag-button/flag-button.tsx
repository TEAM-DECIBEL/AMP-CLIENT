import { AMP_FLAG_GRADIENT_ICON_URL } from '@amp/ads-ui/icon-urls';
import { AmpFlagIcon } from '@amp/ads-ui/icons';

import * as styles from './flag-button.css';

interface FlagButtonProps {
  selected: boolean;
  onChange: () => void;
  disabled?: boolean;
}

const FlagButton = ({ selected, onChange, disabled }: FlagButtonProps) => {
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
        <img
          src={AMP_FLAG_GRADIENT_ICON_URL}
          className={styles.icon}
          alt='Gradient Flag'
        />
      ) : (
        <AmpFlagIcon className={styles.icon} />
      )}
    </button>
  );
};

export default FlagButton;
