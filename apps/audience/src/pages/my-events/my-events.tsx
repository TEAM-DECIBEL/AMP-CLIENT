import { CardFestival, Chip } from '@amp/ads-ui';

import { myEventsData } from '@shared/mocks/my-events-data';

import * as styles from './my-events.css';

const getStatusChip = (status: string) => {
  if (status === '관람 중') {
    return (
      <Chip variant='status' status='current'>
        관람 중
      </Chip>
    );
  }

  return (
    <Chip variant='status' status='upcoming'>
      관람 예정
    </Chip>
  );
};

const MyEventsPage = () => {
  return (
    <section className={styles.page}>
      <div className={styles.list}>
        {myEventsData.festivals.map((festival) => (
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

export default MyEventsPage;
