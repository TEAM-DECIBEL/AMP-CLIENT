import { CardFestival, Chip, EmptyView } from '@amp/ads-ui';

import { myHistoryFestivals } from '@shared/mocks/my-history-data';

import * as styles from './my-history.css';

const getStatusChip = (status: string) => {
  if (status === '진행 중') {
    return (
      <Chip variant='status' status='current'>
        진행 중
      </Chip>
    );
  }

  if (status === '진행 예정') {
    return (
      <Chip variant='status' status='upcoming'>
        진행 예정
      </Chip>
    );
  }

  return (
    <Chip variant='status' status='dday'>
      진행 완료
    </Chip>
  );
};

const MyHistory = () => {
  if (myHistoryFestivals.length === 0) {
    return (
      <section className={styles.page}>
        <div className={styles.empty}>
          <EmptyView title='진행한 공연이 없어요!' />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.list}>
        {myHistoryFestivals.map((festival) => (
          <CardFestival key={festival.festivalId}>
            <CardFestival.Image
              src={festival.mainImageUrl}
              alt={festival.title}
            />
            <CardFestival.Body title={festival.title} date={festival.period}>
              <CardFestival.Chip>
                {getStatusChip(festival.status)}
              </CardFestival.Chip>
            </CardFestival.Body>
          </CardFestival>
        ))}
      </div>
    </section>
  );
};

export default MyHistory;
