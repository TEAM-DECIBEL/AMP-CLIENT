import type { SyntheticEvent } from 'react';

import { PageIndicator } from '@amp/ads-ui';
import { useDraggableCarousel } from '@amp/shared/hooks';

import { IMAGES } from '../assets/index';

import * as styles from '../notice-detail-layout/notice-detail-layout.css';

interface NoticeImageCarouselProps {
  imageUrls: string[];
  title: string;
}

const NoticeImageCarousel = ({
  imageUrls,
  title,
}: NoticeImageCarouselProps) => {
  const displayImages =
    imageUrls.length > 0 ? imageUrls : [IMAGES.EMPTY_NOTICE];
  const {
    currentPage,
    handleMouseDown,
    handleMouseMove,
    handleMouseUp,
    handleScroll,
    isIndicatorVisible,
    isDragging,
    trackRef,
  } = useDraggableCarousel({
    itemCount: displayImages.length,
  });

  const handleImageError = (event: SyntheticEvent<HTMLImageElement>) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = IMAGES.EMPTY_NOTICE;
  };

  return (
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
                  ? `${title} ${index + 1}번째 이미지`
                  : title
              }
              draggable={false}
              className={styles.img}
              onError={handleImageError}
            />
          </li>
        ))}
      </ul>
      {isIndicatorVisible && (
        <div className={styles.indicator}>
          <PageIndicator
            currentPage={currentPage}
            totalPages={displayImages.length}
          />
        </div>
      )}
    </div>
  );
};

export default NoticeImageCarousel;
