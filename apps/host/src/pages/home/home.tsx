import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import {
  ButtonGradientSection,
  InstallGuideSheet,
  Loading,
} from '@amp/compositions';
import { usePwaInstallGuide } from '@amp/shared/hooks';

import FestivalOverview from '@widgets/home/festival-overview/festival-overview';

import { HOME_QUERY_OPTIONS } from '@features/home/apis/query';
import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import { ROUTE_PATH } from '@shared/constants/path';
import CardHomebannerOrg from '@shared/ui/card/card-homebanner-organizer/card-homebanner-org';
import Tooltip from '@shared/ui/tooltip/tooltip';

import * as styles from './home.css';

const HomePage = () => {
  const navigate = useNavigate();

  const { isOpen, handleOpenApp, handleBrowseToday, handleClose } =
    usePwaInstallGuide({
      onMoveToGuide: () => navigate(ROUTE_PATH.PWA_GUIDE),
    });

  const { data: homeData, isPending: isHomePending } = useQuery(
    HOME_QUERY_OPTIONS.FESTIVALS(),
  );

  const { data: orgData, isPending: isOrgPending } = useQuery(
    MY_PAGE_QUERY_OPTIONS.MY_PAGE(),
  );

  const nickname = orgData?.organizerName;

  const isLoading = isHomePending || isOrgPending;

  if (isLoading) {
    return <Loading />;
  }

  if (!homeData) {
    return null;
  }

  const { summary, ongoingFestivals, upcomingFestivals } = homeData;

  const showTooltip = summary.ongoingCount === 0 && summary.upcomingCount === 0;

  const handleCreateClick = () => {
    navigate(ROUTE_PATH.EVENT_CREATE);
  };

  return (
    <>
      <section className={styles.page}>
        <CardHomebannerOrg nickname={nickname ?? 'SOPT'} />

        <div className={styles.content}>
          <FestivalOverview
            ongoingCount={summary.ongoingCount}
            upcomingCount={summary.upcomingCount}
            ongoingFestivals={ongoingFestivals}
            upcomingFestivals={upcomingFestivals}
          />
        </div>

        <ButtonGradientSection className={styles.ctaArea}>
          {showTooltip && <Tooltip />}
          <CtaButton type='common' onClick={handleCreateClick}>
            공연 등록하기
          </CtaButton>
        </ButtonGradientSection>
      </section>
      {isOpen && (
        <InstallGuideSheet
          open={isOpen}
          onClose={handleClose}
          onOpenApp={handleOpenApp}
          onBrowseToday={handleBrowseToday}
          description='간편하게 공지를 작성해보세요.'
        />
      )}
    </>
  );
};

export default HomePage;
