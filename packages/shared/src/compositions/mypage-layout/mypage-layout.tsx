import { Chip, MyPageMenuContainer, MyPageMenuItem } from '@amp/ads-ui';

import * as styles from './mypage-layout.css';

interface MyPageLayoutProps {
  name: string;
  roleLabel: string;
  profileImageUrl?: string;
  menuItems?: {
    id: string;
    label: string;
    onClick: () => void;
  }[];
}

const MyPageLayout = ({
  name,
  roleLabel,
  profileImageUrl,
  menuItems,
}: MyPageLayoutProps) => {
  const handleLogout = () => {
    // 로그아웃 로직 추가
  };

  return (
    <section className={styles.container}>
      <div className={styles.profileSection}>
        {profileImageUrl ? (
          <img
            className={styles.profileImage}
            src={profileImageUrl}
            alt={`${name} 프로필`}
          />
        ) : (
          <div className={styles.profilePlaceholder} aria-hidden />
        )}
        <p className={styles.name}>{name}</p>
        <Chip variant='mypage'>{roleLabel}</Chip>
      </div>
      {menuItems && menuItems.length > 0 ? (
        <div className={styles.menuSection}>
          <MyPageMenuContainer>
            {menuItems.map((menu) => (
              <MyPageMenuItem key={menu.id} onClick={menu.onClick}>
                {menu.label}
              </MyPageMenuItem>
            ))}
          </MyPageMenuContainer>
        </div>
      ) : null}
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
