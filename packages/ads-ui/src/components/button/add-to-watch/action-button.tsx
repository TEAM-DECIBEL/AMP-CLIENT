import type { ReactNode } from 'react';

import * as styles from './action-button.css';

interface ActionButtonProps {
  selected?: boolean;
  onChange: () => void;
  disabled?: boolean;
  children?: ReactNode;
  emphasized?: boolean;
}

const ActionButton = ({
  selected,
  onChange,
  disabled,
  children,
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
      {children}
    </button>
  );
};

export default ActionButton;
