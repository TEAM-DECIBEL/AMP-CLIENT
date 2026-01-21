import notFoundImage from './404.webp';
import loginImage from './login.webp';
import loginCompleteImage from './login-complete.webp';
import noticeBanner from './notice-banner.webp';
import onboardingImage from './onboarding.webp';

export const IMAGES = {
  LOGIN: loginImage,
  ONBOARDING: onboardingImage,
  NOT_FOUND: notFoundImage,
  NOTICE_BANNER: noticeBanner,
  LOGIN_COMPLETE: loginCompleteImage,
} as const;
