import { EmptyAlertIcon } from '@amp/ads-ui/icons';

import { useNotificationsQuery } from '@shared/hooks/use-notifications';
// import { useAlertStation } from '@shared/hooks/use-alert-station';
import AlertCard from '@shared/ui/card/card-alert/card-alert';

import * as styles from './notification.css';

const NotificationPage = () => {
  // const {
  //   alerts,
  //   // hasMore,
  //   isLoading,
  //   initMock,
  //   // appendMock,
  //   markAsReadLocal,
  //   isRead,
  // } = useAlertStation();

  // useEffect(() => {
  //   initMock();
  // }, [initMock]);

  // const handleAlertClick = (alertId: string) => {
  //   markAsReadLocal(alertId);

  //   // TODO: 상세 페이지 연결
  // };

  const handleAlertClick = (notificationId: number) => {
    //TODO: 알림 읽음 처리. 해당 페이지로 이동
  };

  const { data, isLoading } = useNotificationsQuery();

  const list = data?.notificationResponseList ?? [];

  const isEmpty = !isLoading && list.length === 0;

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
          <ul>
            {list?.map((data, index) => (
              <li key={data.notificationId}>
                <AlertCard
                  title={data.title}
                  description={data.message}
                  time={data.title}
                  isRead={data.isRead}
                  onClick={() => handleAlertClick(data.notificationId)}
                />
                {index < list.length - 1 && <div className={styles.divider} />}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
};

export default NotificationPage;
