import { getMobileOs } from './device';

const INSTALL_GUIDE_DISMISSED_DATE = 'install-guide-dismissed-date';

const getTodayString = () => {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const date = String(now.getDate()).padStart(2, '0');

  return `${year}-${month}-${date}`;
};

const isPwaMode = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  return (
    window.matchMedia('(display-mode: standalone)').matches ||
    window.matchMedia('(display-mode: minimal-ui)').matches ||
    (window.navigator as Navigator & { standalone?: boolean }).standalone ===
      true
  );
};

export const dismissInstallGuideForToday = () => {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    window.localStorage.setItem(INSTALL_GUIDE_DISMISSED_DATE, getTodayString());
  } catch {
    return;
  }
};

export const hasShowInstallGuide = () => {
  if (typeof window === 'undefined') {
    return false;
  }

  const os = getMobileOs();

  if (os !== 'ios' && os !== 'android') {
    return false;
  }

  if (isPwaMode()) {
    return false;
  }

  try {
    const dismissedDate = window.localStorage.getItem(
      INSTALL_GUIDE_DISMISSED_DATE,
    );
    const today = getTodayString();

    if (dismissedDate === today) {
      return false;
    }

    if (dismissedDate && dismissedDate !== today) {
      window.localStorage.removeItem(INSTALL_GUIDE_DISMISSED_DATE);
    }

    return true;
  } catch {
    return true;
  }
};
