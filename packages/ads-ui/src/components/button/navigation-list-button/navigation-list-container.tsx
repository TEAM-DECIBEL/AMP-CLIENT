import type { ReactNode } from 'react';

import * as styles from './navigation-list.css';

const NavigationListContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.listContainer}>{children}</div>;
};

export default NavigationListContainer;
