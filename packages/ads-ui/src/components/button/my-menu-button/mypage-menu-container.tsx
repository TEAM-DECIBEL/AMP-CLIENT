import { ReactNode } from 'react';

import * as styles from './mypage-menu.css';

const MyPageMenuContainer = ({ children }: { children: ReactNode }) => {
  return <div className={styles.menuContainer}>{children}</div>;
};

export default MyPageMenuContainer;
