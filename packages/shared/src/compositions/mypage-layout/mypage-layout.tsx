import type { ReactNode } from 'react';

import { Chip } from '@amp/ads-ui';

import * as styles from './mypage-layout.css';

interface MyPageLayoutProps {
  name: string;
  roleLabel: string;
  profileImageUrl?: string;
}

const MyPageLayout = ({
  name,
  roleLabel,
  profileImageUrl,
}: MyPageLayoutProps) => {
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
    </section>
  );
};

export default MyPageLayout;
