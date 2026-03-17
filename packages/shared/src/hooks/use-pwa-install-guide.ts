import { useEffect, useRef, useState } from 'react';

import { getMobileOs } from '../utils/device';
import {
  dismissInstallGuideForToday,
  shouldShowInstallGuide,
} from '../utils/install-guide-storage';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
}

interface UsePwaInstallGuideProps {
  onMoveToGuide: () => void;
}

export const usePwaInstallGuide = ({
  onMoveToGuide,
}: UsePwaInstallGuideProps) => {
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

  const handleOpenApp = async () => {
    const os = getMobileOs();

    if (os === 'ios') {
      onMoveToGuide();
      return;
    }

    if (os === 'android' && deferredPromptRef.current) {
      await deferredPromptRef.current.prompt();
      await deferredPromptRef.current.userChoice;
      deferredPromptRef.current = null;
      setIsOpen(false);
      return;
    }

    onMoveToGuide();
  };

  const handleBrowseToday = () => {
    dismissInstallGuideForToday();
    setIsOpen(false);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleOpenApp,
    handleBrowseToday,
    handleClose,
  };
};
