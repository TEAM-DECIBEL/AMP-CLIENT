import type { SavedNotice } from '@shared/types/notice';

export const savedNoticesData: { notices: SavedNotice[] } = {
  notices: [
    {
      noticeId: 145,
      title: '타임테이블 변경 안내',
      content:
        '아티스트 일정 변경으로 인해 공연 타임테이블이 일부 수정되었습니다...',
      imageUrl:
        'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/notices/notice-145.jpg',
      festival: {
        festivalId: 29,
        title: '서울재즈페스티벌 2026',
        mainImageUrl:
          'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/festivals/festival-29.jpg',
      },
      category: {
        categoryId: 5,
        categoryName: '공연정보',
        categoryCode: 'PERFORMANCE',
      },
    },
    {
      noticeId: 132,
      title: '주차장 이용 안내',
      content: '페스티벌 기간 주차장 운영 시간 및 요금 안내드립니다...',
      imageUrl: null,
      festival: {
        festivalId: 27,
        title: '부산 록 페스티벌',
        mainImageUrl:
          'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/festivals/festival-27.jpg',
      },
      category: {
        categoryId: 3,
        categoryName: '편의시설',
        categoryCode: 'FACILITY',
      },
    },
  ],
};
