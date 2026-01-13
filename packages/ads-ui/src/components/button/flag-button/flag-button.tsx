import { AmpFlagGradientIcon, AmpFlagIcon } from '../../../icons';

import * as styles from './flag-button.css';

interface FlagButtonProps {
  selected: boolean;
  onChange: (nextSelected: boolean) => void;
}

const FlagButton = ({ selected, onChange }: FlagButtonProps) => {
  return (
    <button
      type='button'
      className={styles.flagButton}
      aria-label='관람 예정 공연 선택'
      aria-pressed={selected}
      onClick={() => onChange(!selected)}
    >
      {selected ? (
        <AmpFlagGradientIcon className={styles.icon} />
      ) : (
        <AmpFlagIcon className={styles.icon} />
      )}
    </button>
  );
};

export default FlagButton;
