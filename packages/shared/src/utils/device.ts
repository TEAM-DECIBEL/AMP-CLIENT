export const getMobileOs = () => {
  if (typeof window === 'undefined') {
    return 'unknown';
  }

  const { userAgent, platform, maxTouchPoints } = window.navigator;

  const isIOS =
    /iPhone|iPad|iPod/.test(userAgent) ||
    (platform === 'MacIntel' && maxTouchPoints > 1);

  if (isIOS) {
    return 'ios';
  }

  if (/Android/.test(userAgent)) {
    return 'android';
  }

  return 'unknown';
};
