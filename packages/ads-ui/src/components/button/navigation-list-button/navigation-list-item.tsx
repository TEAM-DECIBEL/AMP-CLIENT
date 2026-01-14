import type { ReactNode } from 'react';

import { RightIcon } from '../../../icons';

import * as styles from './navigation-list.css';

interface MyPageMenuProps {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
}
const MyPageMenuItem = ({ children, onClick, disabled }: MyPageMenuProps) => {
  return (
    <button
      type='button'
      className={styles.menuItem}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      <RightIcon className={styles.icon} />
    </button>
  );
};

export default MyPageMenuItem;
