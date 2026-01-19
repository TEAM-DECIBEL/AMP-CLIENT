type MyEventsStatus = '관람 중' | '관람 예정';

interface MyEventsFestival {
  festivalId: number;
  title: string;
  mainImageUrl: string;
  period: string;
  status: MyEventsStatus;
  wishList: boolean;
}

export const myEventsData: { festivals: MyEventsFestival[] } = {
  festivals: [
    {
      festivalId: 15,
      title: 'Grand Mint Festival',
      mainImageUrl: 'https://example.com/image1.jpg',
      period: '2026-01-15 ~ 2026-01-16',
      status: '관람 중',
      wishList: true,
    },
    {
      festivalId: 12,
      title: 'Grand Mint Festival',
      mainImageUrl: 'https://example.com/image2.jpg',
      period: '2026-01-15 ~ 2026-01-16',
      status: '관람 예정',
      wishList: true,
    },
  ],
};
