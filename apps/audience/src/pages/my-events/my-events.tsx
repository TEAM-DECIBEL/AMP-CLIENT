import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { EmptyView } from '@amp/ads-ui';
import { Loading } from '@amp/compositions';

import FestivalCard from '@widgets/home/components/festival-card/festival-card';

import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import { ROUTE } from '@shared/constants/path';

import * as styles from './my-events.css';

const MyEventsPage = () => {
  const navigate = useNavigate();
  const { data: viewedData, isPending } = useQuery(
    MY_PAGE_QUERY_OPTIONS.VIEWED_FESTIVALS(),
  );

  const festivals = viewedData?.festivals ?? [];

  const handleCardClick = (festivalId: number) => {
    navigate(ROUTE.noticeList(festivalId));
  };

  if (isPending) {
    return <Loading />;
  }

  if (!viewedData || festivals.length === 0) {
    return (
      <section className={styles.page}>
        <div className={styles.empty}>
          <EmptyView imageType='ticket' title='관람 공연이 없어요!' />
        </div>
      </section>
    );
  }

  return (
    <section className={styles.page}>
      <div className={styles.list}>
        {festivals.map((festival) => {
          return (
            <FestivalCard
              key={festival.festivalId}
              festival={festival}
              showWishList={false}
              onCardClick={handleCardClick}
            />
          );
        })}
      </div>
    </section>
  );
};

export default MyEventsPage;
