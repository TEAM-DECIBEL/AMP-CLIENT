import type { ReactNode } from 'react';

import { AmpFlagIcon } from '../../../icons';

import * as styles from './action-button.css';

interface ActionButtonProps {
  selected?: boolean;
  onChange: () => void;
  disabled?: boolean;
  icon?: ReactNode;
  children?: ReactNode;
  emphasized?: boolean;
}

const ActionButton = ({
  selected,
  onChange,
  disabled,
  icon = <AmpFlagIcon />,
  children = '관람 예정',
  emphasized = false,
}: ActionButtonProps) => {
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

export default ActionButton;
