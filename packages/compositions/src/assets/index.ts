import crowded from './crowded.webp';
import emptyNotice from './empty-notice.webp';
import homeBannerAudience from './homebanner-audience.svg';
import homeBannerAudienceNone from './homebanner-audience-none.svg';
import emptyNoticeCard from './img-empty-notice.webp';
import none from './none.webp';
import normal from './normal.webp';
import noticeBanner from './notice-banner.webp';
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

  EMPTY_NOTICE_CARD: emptyNoticeCard,
} as const;
