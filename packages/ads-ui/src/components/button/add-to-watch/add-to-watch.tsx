import { AmpFlagIcon } from '../../../icons';

import * as styles from './add-to-watch.css';

interface AddToWatchButtonProps {
  selected: boolean;
  onChange: (nextSelected: boolean) => void;
  disabled?: boolean;
}

const AddToWatchButton = ({
  selected,
  onChange,
  disabled,
}: AddToWatchButtonProps) => {
  return (
    <button
      type='button'
      className={styles.addToWatch}
      aria-pressed={selected}
      disabled={disabled}
      onClick={() => onChange(!selected)}
    >
      <AmpFlagIcon className={styles.icon} />
      관람 예정
    </button>
  );
};

export default AddToWatchButton;
