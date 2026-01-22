import { type ReactNode, useState } from 'react';

import { Chip, MyPageMenuContainer, MyPageMenuItem } from '@amp/ads-ui';
import { IMAGES } from '@amp/ads-ui/assets';

import * as styles from './mypage-layout.css';

interface MyPageLayoutProps {
  name: string;
  roleLabel: string;
  profileImageUrl?: string;
  menuItems: {
    id: string;
    label: string;
    onClick: () => void;
  }[];
  dashboard?: ReactNode;
  handleLogout: () => void;
}

const MyPageLayout = ({
  name,
  roleLabel,
  profileImageUrl,
  menuItems,
  dashboard,
  handleLogout,
}: MyPageLayoutProps) => {
  const [profileImageSrc, setProfileImageSrc] = useState(
    profileImageUrl ?? IMAGES.AVATAR,
  );

  const handleProfileImageError = () => {
    if (profileImageSrc !== IMAGES.AVATAR) {
      setProfileImageSrc(IMAGES.AVATAR);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.profileSection}>
        <img
          className={styles.profileImage}
          src={profileImageSrc}
          alt={`${name} 프로필`}
          loading='lazy'
          decoding='async'
          onError={handleProfileImageError}
        />
        <p className={styles.name}>{name}</p>
        <Chip variant='mypage'>{roleLabel}</Chip>
      </div>
      {dashboard && (
        <div className={styles.dashboardSection}>
          <div className={styles.contentWidth}>{dashboard}</div>
        </div>
      )}
      <div className={styles.menuSection}>
        <div className={styles.contentWidth}>
          <MyPageMenuContainer>
            {menuItems.map((menu) => (
              <MyPageMenuItem key={menu.id} onClick={menu.onClick}>
                {menu.label}
              </MyPageMenuItem>
            ))}
          </MyPageMenuContainer>
        </div>
      </div>
      <button
        type='button'
        className={styles.logoutButton}
        onClick={handleLogout}
      >
        로그아웃
      </button>
    </section>
  );
};

export default MyPageLayout;
