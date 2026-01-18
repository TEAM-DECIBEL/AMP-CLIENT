import type { HomeResponseData } from '@shared/types/home-response';

export const homeData: HomeResponseData = {
  summary: {
    ongoingCount: 2,
    upcomingCount: 3,
  },
  ongoingFestivals: [
    {
      festivalId: 27,
      mainImageUrl:
        'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/festivals/45d37f12-7f25-4ef2-930c-478512c0ab38.jpg',
      title: '몽몽몽몽',
      period: '2026. 01. 11 - 2026. 01. 16',
      status: '진행 중',
      dDay: 0,
    },
    {
      festivalId: 19,
      mainImageUrl:
        'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/festivals/2d46a476-ceab-4859-ada0-ed6bb8482b66.jpg',
      title: '몽몽몽몽',
      period: '2026. 01. 12 - 2026. 01. 15',
      status: '진행 중',
      dDay: 0,
    },
  ],
  upcomingFestivals: [
    {
      festivalId: 29,
      mainImageUrl:
        'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/festivals/5f55bb2a-058c-41ae-bf1e-661999de4652.jpg',
      title: '몽몽몽몽',
      period: '2026. 01. 16 - 2026. 01. 20',
      status: '진행 예정',
      dDay: -2,
    },
    {
      festivalId: 28,
      mainImageUrl:
        'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/festivals/d416546f-cb34-4a9b-bf60-f5e0f643cfc8.jpg',
      title: '몽몽몽몽',
      period: '2026. 01. 17 - 2026. 01. 19',
      status: '진행 예정',
      dDay: -3,
    },
    {
      festivalId: 30,
      mainImageUrl:
        'https://amp-server-s3-bucket-v1.s3.ap-northeast-2.amazonaws.com/festivals/4207bafb-4798-41ec-bd8c-ead1c50b9b71.jpg',
      title: '몽몽몽몽',
      period: '2026. 01. 20',
      status: '진행 예정',
      dDay: -6,
    },
  ],
  paginationResponse: {
    currentPage: 0,
    totalPages: 1,
    totalElements: 5,
    size: 20,
    hasNext: false,
    hasPrevious: false,
  },
};
