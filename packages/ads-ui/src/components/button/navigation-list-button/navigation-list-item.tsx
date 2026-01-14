import type { ReactNode } from 'react';

import { RightIcon } from '../../../icons';

import * as styles from './navigation-list.css';

interface NavigationListItemsProps {
  children: ReactNode;
  onClick: () => void;
}
const NavigationListItem = ({
  children,
  onClick,
}: NavigationListItemsProps) => {
  return (
    <button type='button' className={styles.listItem} onClick={onClick}>
      {children}
      <RightIcon className={styles.icon} />
    </button>
  );
};

export default NavigationListItem;
