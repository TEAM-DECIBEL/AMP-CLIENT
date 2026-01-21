import { useEffect } from 'react';

import { EmptyAlertIcon } from '@amp/ads-ui/icons';

import { useAlertStation } from '@shared/hooks/use-alert-station';
import AlertCard from '@shared/ui/card/card-alert/card-alert';

import * as styles from './notification.css';

const NotificationPage = () => {
  const {
    alerts,
    hasMore,
    isLoading,
    initMock,
    appendMock,
    markAsReadLocal,
    isRead,
  } = useAlertStation();

  useEffect(() => {
    initMock();
  }, [initMock]);

  const handleAlertClick = (alertId: string) => {
    markAsReadLocal(alertId);

    // TODO: 상세 페이지 연결
  };

  const isEmpty = !isLoading && alerts.length === 0;

  return (
    <main className={styles.pageContainer}>
      {isEmpty ? (
        <div className={styles.emptyContainer}>
          <EmptyAlertIcon />
          <div className={styles.emptyTextContainer}>
            <p className={styles.emptyTitle}>알림이 없어요!</p>
            <p className={styles.emptySubText}>
              공지 알림을 설정하고 새 공지를 알림으로 받아보세요.
            </p>
          </div>
        </div>
      ) : (
        <section aria-label='알림 목록'>
          {alerts.map((alert) => (
            <>
              <button
                key={alert.id}
                type='button'
                className={styles.alertCardContainer}
                onClick={() => handleAlertClick(alert.id)}
              >
                <AlertCard
                  title={`${alert.title} 공지가 업로드 되었어요!`}
                  description={`${alert.message}`}
                  time={`${alert.time}분 전`}
                  isRead={isRead(alert.id)}
                />
              </button>
              <div className={styles.divider} />
            </>
          ))}
        </section>
      )}
    </main>
  );
};

export default NotificationPage;
