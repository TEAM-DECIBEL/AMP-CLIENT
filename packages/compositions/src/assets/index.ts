import crowded from './crowded.webp';
import emptyNotice from './empty-notice.webp';
import homeBannerAudience from './homebanner-audience.webp';
import homeBannerAudienceNone from './homebanner-audience-none.webp';
import logo from './logo.webp';
import none from './none.webp';
import normal from './normal.webp';
import noticeBanner from './notice-banner.webp';
import pwaStep1 from './pwa-step1.webp';
import pwaStep2 from './pwa-step2.webp';
import pwaStep3 from './pwa-step3.webp';
import pwaStep4 from './pwa-step4.webp';
import smooth from './smooth.webp';

export const IMAGES = {
  HOME_BANNER_AUDIENCE: homeBannerAudience,
  HOME_BANNER_AUDIENCE_NONE: homeBannerAudienceNone,
  NOTICE_BANNER: noticeBanner,

  CROWDED: crowded,
  NORMAL: normal,
  SMOOTH: smooth,
  NONE: none,

  EMPTY_NOTICE: emptyNotice,

  LOGO: logo,

  PWA_STEP1: pwaStep1,
  PWA_STEP2: pwaStep2,
  PWA_STEP3: pwaStep3,
  PWA_STEP4: pwaStep4,
} as const;
