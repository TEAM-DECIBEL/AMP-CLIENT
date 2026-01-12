import { AlertIcon, BackIcon, ExLogoIcon, MyPageIcon } from '../../icons';

import * as styles from './header.css';

interface HeaderProps {
  variant: 'host' | 'audience';
  kind: 'main' | 'sub';
  title?: string;
}

const Header = ({ variant, kind, title }: HeaderProps) => {
  const isMain = kind === 'main';
  const isSub = kind === 'sub';
  const showAlert = isMain && variant === 'audience';
  const showMyPage = isMain;

  return (
    <header className={styles.header}>
      {isMain && (
        <div className={styles.main}>
          <ExLogoIcon />
          <div className={styles.mainIcons}>
            {showAlert && (
              <button type='button' className={styles.iconButton}>
                <AlertIcon />
              </button>
            )}
            {showMyPage && (
              <button type='button' className={styles.iconButton}>
                <MyPageIcon />
              </button>
            )}
          </div>
        </div>
      )}
      {isSub && (
        <div className={styles.subRow}>
          <button type='button' className={styles.backButton}>
            <BackIcon />
          </button>
          {title && <h1 className={styles.title}>{title}</h1>}
        </div>
      )}
    </header>
  );
};

export default Header;
