import { ReactNode, useRef, useState } from 'react';
import type { MouseEvent, SyntheticEvent, UIEvent } from 'react';

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

interface DragState {
  isMouseDown: boolean;
  startX: number;
  startScrollLeft: number;
}

const INITIAL_DRAG_STATE: DragState = {
  isMouseDown: false,
  startX: 0,
  startScrollLeft: 0,
};

const getSnapScrollLeft = (element: HTMLElement) => {
  if (element.clientWidth === 0) {
    return 0;
  }

  return Math.round(element.scrollLeft / element.clientWidth) * element.clientWidth;
};

const NoticeDetailLayoutRoot = ({ children }: NoticeDetailLayoutProps) => {
  return <main className={styles.container}>{children}</main>;
};

const Content = ({ data }: NoticeDetailContentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLUListElement | null>(null);
  const dragStateRef = useRef<DragState>(INITIAL_DRAG_STATE);
  const displayImages =
    data.imageUrls.length > 0 ? data.imageUrls : [IMAGES.EMPTY_NOTICE];
  const shouldShowIndicator = data.imageUrls.length > 1;

  const handleScroll = (event: UIEvent<HTMLUListElement>) => {
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

  const handleMouseDown = (event: MouseEvent<HTMLUListElement>) => {
    dragStateRef.current = {
      isMouseDown: true,
      startX: event.clientX,
      startScrollLeft: event.currentTarget.scrollLeft,
    };
    setIsDragging(true);
  };

  const handleMouseMove = (event: MouseEvent<HTMLUListElement>) => {
    if (!dragStateRef.current.isMouseDown) {
      return;
    }

    const deltaX = event.clientX - dragStateRef.current.startX;
    event.currentTarget.scrollLeft =
      dragStateRef.current.startScrollLeft - deltaX;
  };

  const handleMouseUp = () => {
    if (trackRef.current) {
      trackRef.current.scrollTo({
        left: getSnapScrollLeft(trackRef.current),
        behavior: 'smooth',
      });
    }

    dragStateRef.current = INITIAL_DRAG_STATE;
    setIsDragging(false);
  };

  return (
    <div className={styles.noticeDetail}>
      <div className={styles.imageSection}>
        <ul
          ref={trackRef}
          className={styles.imageTrack}
          data-dragging={isDragging}
          onScroll={handleScroll}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
        >
          {displayImages.map((imageUrl, index) => (
            <li key={`${imageUrl}-${index}`} className={styles.imageItem}>
              <img
                src={imageUrl}
                alt={
                  displayImages.length > 1
                    ? `${data.title} ${index + 1}번째 이미지`
                    : data.title
                }
                draggable={false}
                className={styles.img}
                onError={handleImageError}
              />
            </li>
          ))}
        </ul>
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
