import type { ReactNode } from 'react';

import { AmpFlagIcon } from '../../../icons';

import * as styles from './add-to-watch.css';

interface AddToWatchButtonProps {
  selected?: boolean;
  onChange: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  emphasized?: boolean;
}

const AddToWatchButton = ({
  selected,
  onChange,
  disabled,
  icon = <AmpFlagIcon />,
  children = '관람 예정',
  emphasized = false,
}: AddToWatchButtonProps) => {
  return (
    <button
      type='button'
      className={styles.button}
      aria-pressed={selected === undefined ? undefined : selected}
      data-selected={selected}
      data-emphasized={emphasized}
      disabled={disabled}
      onClick={onChange}
    >
      {icon ? (
        <span className={styles.icon} aria-hidden='true'>
          {icon}
        </span>
      ) : null}
      {children}
    </button>
  );
};

export default AddToWatchButton;
