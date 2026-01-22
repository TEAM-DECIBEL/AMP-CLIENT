import emptyNotice from './empty-notice.webp';
import homeBannerAudience from './homebanner-audience.svg';
import homeBannerAudienceNone from './homebanner-audience-none.svg';
import emptyNoticeCard from './img-empty-notice.webp';
import noticeBanner from './notice-banner.webp';

export const IMAGES = {
  HOME_BANNER_AUDIENCE: homeBannerAudience,
  HOME_BANNER_AUDIENCE_NONE: homeBannerAudienceNone,
  NOTICE_BANNER: noticeBanner,

  EMPTY_NOTICE: emptyNotice,

  EMPTY_NOTICE_CARD: emptyNoticeCard,
} as const;
