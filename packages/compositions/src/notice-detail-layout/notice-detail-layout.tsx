import { ReactNode, useState } from 'react';
import type { SyntheticEvent, UIEvent } from 'react';

import { PageIndicator } from '@amp/ads-ui';

import { IMAGES } from '../assets/index';
import ButtonGradientSection from '../button-gradient-section/button-gradient-section';

import * as styles from './notice-detail-layout.css';

interface NoticeData {
  imageUrls: string[];
  title: string;
  category: string;
  createdAt: string;
  content: string;
}

interface NoticeDetailLayoutProps {
  children: ReactNode;
}

interface NoticeDetailContentProps {
  data: NoticeData;
}

interface NoticeDetailActionsProps {
  children: ReactNode;
}

const NoticeDetailLayoutRoot = ({ children }: NoticeDetailLayoutProps) => {
  return <main className={styles.container}>{children}</main>;
};

const Content = ({ data }: NoticeDetailContentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const displayImages =
    data.imageUrls.length > 0 ? data.imageUrls : [IMAGES.EMPTY_NOTICE];
  const shouldShowIndicator = data.imageUrls.length > 1;

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollLeft, clientWidth } = event.currentTarget;
    if (clientWidth === 0) {
      return;
    }

    setCurrentPage(Math.round(scrollLeft / clientWidth) + 1);
  };

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = IMAGES.EMPTY_NOTICE;
  };

  return (
    <div className={styles.noticeDetail}>
      <div className={styles.imageSection}>
        <div className={styles.imageTrack} onScroll={handleScroll}>
          {displayImages.map((imageUrl, index) => (
            <img
              key={`${imageUrl}-${index}`}
              src={imageUrl}
              alt={data.title}
              className={styles.img}
              onError={handleImageError}
            />
          ))}
        </div>
        {shouldShowIndicator && (
          <div className={styles.indicator}>
            <PageIndicator
              currentPage={currentPage}
              totalPages={displayImages.length}
            />
          </div>
        )}
      </div>
      <header className={styles.header}>
        <p className={styles.category}>
          주최 공지 {'>'} {data.category}
        </p>
        <p className={styles.date}>{data.createdAt}</p>
      </header>
      <div className={styles.contents}>
        <p className={styles.title}>{data.title}</p>
        <p className={styles.text}>{data.content}</p>
      </div>
    </div>
  );
};

const Actions = ({ children }: NoticeDetailActionsProps) => {
  return (
    <ButtonGradientSection className={styles.button}>
      {children}
    </ButtonGradientSection>
  );
};

const NoticeDetailLayout = Object.assign(NoticeDetailLayoutRoot, {
  Content,
  Actions,
});

export default NoticeDetailLayout;
