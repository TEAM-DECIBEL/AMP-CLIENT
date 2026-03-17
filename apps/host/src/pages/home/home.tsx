import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { CtaButton } from '@amp/ads-ui';
import {
  ButtonGradientSection,
  InstallGuideSheet,
  Loading,
} from '@amp/compositions';
import {
  dismissInstallGuideForToday,
  shouldShowInstallGuide,
} from '@amp/shared/utils';
import { getMobileOs } from '@amp/shared/utils';

import FestivalOverview from '@widgets/home/festival-overview/festival-overview';

import { HOME_QUERY_OPTIONS } from '@features/home/apis/query';
import { MY_PAGE_QUERY_OPTIONS } from '@features/mypage/apis/query';

import { ROUTE_PATH } from '@shared/constants/path';
import CardHomebannerOrg from '@shared/ui/card/card-homebanner-organizer/card-homebanner-org';
import Tooltip from '@shared/ui/tooltip/tooltip';

import * as styles from './home.css';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
}

const HomePage = () => {
  const navigate = useNavigate();
  const deferredPromptRef = useRef<BeforeInstallPromptEvent | null>(null);

  const [isOpen, setIsOpen] = useState(() => shouldShowInstallGuide());

  useEffect(() => {
    const handleBeforeInstallPrompt = (event: Event) => {
      event.preventDefault();
      deferredPromptRef.current = event as BeforeInstallPromptEvent;
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener(
        'beforeinstallprompt',
        handleBeforeInstallPrompt,
      );
    };
  }, []);

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

  const handleOpenApp = async () => {
    const os = getMobileOs();

    if (os === 'ios') {
      navigate(ROUTE_PATH.PWA_GUIDE);
      return;
    }

    if (os === 'android' && deferredPromptRef.current) {
      await deferredPromptRef.current.prompt();
      await deferredPromptRef.current.userChoice;
      deferredPromptRef.current = null;
      setIsOpen(false);
      return;
    }
    navigate(ROUTE_PATH.PWA_GUIDE);
  };

  const handleBrowseToday = () => {
    dismissInstallGuideForToday();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
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
          userType='HOST'
        />
      )}
    </>
  );
};

export default HomePage;
