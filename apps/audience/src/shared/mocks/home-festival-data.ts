export const allFestivalData = {
  status: '200_003',
  msg: '전체 공연 정보가 조회되었습니다.',
  data: {
    festivals: [
      {
        festivalId: 1,
        title: '2025 Grand Mint Festival',
        mainImageUrl: 'https://.../uuid.jpg',
        period: '2025. 10. 29 - 2025. 10. 30',
        wishList: true,
        dDay: 0,
      },
      {
        festivalId: 2,
        title: '2025 Grand Pink Festival',
        mainImageUrl: 'https://.../uuid.jpg',
        period: '2026. 01. 12',
        wishList: false,
        dDay: -1,
      },
    ],
    pagination: {
      currentPage: 0,
      totalPages: 1,
      totalElements: 2,
      size: 20,
      hasNext: false,
      hasPrevious: false,
    },
  },
};

export const upcomingFestivalData = {
  status: '200_001',
  message: '관람 공연 조회가 완료되었습니다.',
  data: {
    festivals: [
      {
        festivalId: 15,
        title: 'Grand Mint Festival',
        mainImageUrl: 'https://example.com/image1.jpg',
        period: '2026-01-15 ~ 2026-01-16',
        status: '관람 예정',
        wishList: true,
        dDay: -1,
      },
      {
        festivalId: 12,
        title: 'Grand Mint Festival',
        mainImageUrl: 'https://example.com/image2.jpg',
        period: '2026-01-15 ~ 2026-01-16',
        status: '관람 예정',
        wishList: true,
        dDay: 0,
      },
    ],
    pagination: {
      currentPage: 0,
      totalPages: 1,
      totalElements: 2,
      size: 20,
      hasNext: true,
      hasPrevious: false,
    },
  },
};
