import { useNavigate } from 'react-router';

import {
  BackIcon,
  ExLogoIcon,
  MyPageIcon,
  StatusNewIcon,
  StatusNoneIcon,
} from '../../icons';

import * as styles from './header.css';

interface HeaderProps {
  variant: 'host' | 'audience';
  kind: 'main' | 'sub';
  title?: string;
  hasNewAlert?: boolean;
}

const Header = ({ variant, kind, title, hasNewAlert = false }: HeaderProps) => {
  const isMain = kind === 'main';
  const isSub = kind === 'sub';
  const showAlert = isMain && variant === 'audience';

  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);

  return (
    <header className={styles.header}>
      {isMain && (
        <div className={styles.mainRow}>
          <ExLogoIcon />
          <div className={styles.mainIcons}>
            {showAlert && (
              <button
                type='button'
                className={styles.iconButton}
                aria-label='알림'
              >
                {hasNewAlert ? <StatusNewIcon /> : <StatusNoneIcon />}
              </button>
            )}
            <button
              type='button'
              className={styles.iconButton}
              aria-label='마이페이지'
            >
              <MyPageIcon />
            </button>
          </div>
        </div>
      )}
      {isSub && (
        <div className={styles.subRow}>
          <button
            type='button'
            className={styles.backButton}
            onClick={handleBackClick}
            aria-label='뒤로가기'
          >
            <BackIcon />
          </button>
          {title && <h1 className={styles.title}>{title}</h1>}
        </div>
      )}
    </header>
  );
};

export default Header;
