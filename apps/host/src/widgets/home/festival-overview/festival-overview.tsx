import { useNavigate } from 'react-router';

import FestivalActions from '@features/home/festival-actions/festival-actions';

import type { Festival } from '@shared/types/home-response';

import FestivalSection from '../festival-section/festival-section';

import * as styles from './festival-overview.css';

interface FestivalOverviewProps {
  ongoingCount: number;
  upcomingCount: number;
  ongoingFestivals: Festival[];
  upcomingFestivals: Festival[];
  onCardClick: (festivalId: number) => void;
}

const FestivalOverview = ({
  ongoingCount,
  upcomingCount,
  ongoingFestivals,
  upcomingFestivals,
  onCardClick,
}: FestivalOverviewProps) => {
  const navigate = useNavigate();

  const sections = [
    {
      title: '진행 중인 공연',
      count: ongoingCount,
      festivals: ongoingFestivals,
      emptyText: '진행 중인 공연이 없어요!',
    },
    {
      title: '진행 예정 공연',
      count: upcomingCount,
      festivals: upcomingFestivals,
      emptyText: '진행 예정인 공연이 없어요!',
    },
  ] as const;

  return (
    <FestivalActions
      onEdit={(noticeId) =>
        navigate(`/events/:eventId/notices/${noticeId}/edit`)
      }
    >
      {(handleOpenOptionSheet) => (
        <div className={styles.container}>
          {sections.map((section) => (
            <FestivalSection
              key={section.title}
              {...section}
              onMoreClick={handleOpenOptionSheet}
              onCardClick={onCardClick}
            />
          ))}
        </div>
      )}
    </FestivalActions>
  );
};

export default FestivalOverview;
