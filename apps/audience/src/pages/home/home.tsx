import { useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

import { HomeBanner, InstallGuideSheet } from '@amp/compositions';
import {
  dismissInstallGuideForToday,
  shouldShowInstallGuide,
} from '@amp/shared/hooks';
import { getMobileOs } from '@amp/shared/utils';

import FestivalSection from '@widgets/home/components/festival-section/festival-section';

import { USER_QUERY_OPTIONS } from '@entities/user/model/query-options';

import { NAV_PATH, ROUTE_PATH } from '@shared/constants/path';

import useHomeFestivals from './model/use-home-festivals';

import { page } from './home.css';

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

  const { data } = useQuery({
    ...USER_QUERY_OPTIONS.NICKNAME(),
  });
  const nickname = data?.nickname;

  const {
    allFestivals,
    plannedFestivals,
    bannerFestival,
    selectedTab,
    setSelectedTab,
  } = useHomeFestivals();

  const handleCardClick = (festivalId: number) => {
    navigate(NAV_PATH.noticeList(festivalId));
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
      <div className={page}>
        {bannerFestival ? (
          <HomeBanner
            nickname={nickname}
            status='card'
            title={bannerFestival.title}
            location={bannerFestival.location}
            date={bannerFestival.period}
            dDay={bannerFestival.dDay}
          />
        ) : (
          <HomeBanner nickname={nickname} status='none' />
        )}

        <FestivalSection
          selectedTab={selectedTab}
          onTabChange={setSelectedTab}
          allFestivals={allFestivals}
          plannedFestivals={plannedFestivals}
          onCardClick={handleCardClick}
        />
      </div>

      {isOpen && (
        <InstallGuideSheet
          open={isOpen}
          onClose={handleClose}
          onOpenApp={handleOpenApp}
          onBrowseToday={handleBrowseToday}
          userType='AUDIENCE'
        />
      )}
    </>
  );
};

export default HomePage;
