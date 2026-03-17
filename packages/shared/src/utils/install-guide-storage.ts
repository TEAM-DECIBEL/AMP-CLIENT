import { getMobileOs } from '.';

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
  localStorage.setItem(INSTALL_GUIDE_DISMISSED_DATE, getTodayString());
};

export const shouldShowInstallGuide = () => {
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

  const dismissedDate = localStorage.getItem(INSTALL_GUIDE_DISMISSED_DATE);
  const today = getTodayString();

  if (dismissedDate === today) {
    return false;
  }

  if (dismissedDate && dismissedDate !== today) {
    localStorage.removeItem(INSTALL_GUIDE_DISMISSED_DATE);
  }

  return true;
};
