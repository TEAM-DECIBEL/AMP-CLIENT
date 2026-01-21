import { overlay } from 'overlay-kit';
import { matchPath, useLocation, useNavigate } from 'react-router';

import { Modal, RectButton } from '@amp/ads-ui';

import { IMAGES } from '../../assets';
import {
  BackIcon,
  MyPageIcon,
  StatusNewIcon,
  StatusNoneIcon,
} from '../../icons';

import * as styles from './header.css';

const CONFIRM_LEAVE_PATH_PATTERNS = [
  '/events/:eventId/notices/new',
  '/events/new',
] as const;

const checkConfirmLeavePath = (pathname: string) => {
  return CONFIRM_LEAVE_PATH_PATTERNS.some((pattern) =>
    matchPath(pattern, pathname),
  );
};

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
  const location = useLocation();

  const handleBackClick = () => {
    const hasConfirmLeavePath = checkConfirmLeavePath(location.pathname);

    if (!hasConfirmLeavePath) {
      navigate(-1);
      return;
    }

    overlay.open(({ isOpen, close, unmount }) => (
      <Modal
        open={isOpen}
        onClose={() => {
          close();
          unmount();
        }}
      >
        <Modal.Panel>
          <Modal.Content>
            <Modal.Title>페이지를 나가시겠어요?</Modal.Title>
            <Modal.Description>
              지금까지 작성한 내용은 사라져요.
            </Modal.Description>
          </Modal.Content>

          <Modal.Actions>
            <RectButton
              variant='secondary'
              onClick={() => {
                close();
                unmount();
              }}
            >
              취소
            </RectButton>

            <RectButton
              variant='primary'
              onClick={() => {
                close();
                unmount();
                navigate(-1);
              }}
            >
              나가기
            </RectButton>
          </Modal.Actions>
        </Modal.Panel>
      </Modal>
    ));
  };

  return (
    <header className={styles.header}>
      {isMain && (
        <div className={styles.mainRow}>
          <img src={IMAGES.LOGO} className={styles.logo} alt='로고 이미지' />
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
