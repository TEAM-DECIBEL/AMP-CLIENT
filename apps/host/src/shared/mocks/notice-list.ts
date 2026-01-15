interface NoticeMockProps {
  announcementId: number;
  categoryName: string;
  title: string;
  content: string;
  imageUrl: string;
  isPinned: boolean;
  isSaved: boolean; // 북마크 여부
  createdAt: string;
}

interface FestivalMockProps {
  dday: string;
  title: string;
  location: string;
  date: string;
}

export const MOCK_DATA: NoticeMockProps[] = [
  {
    announcementId: 10,
    categoryName: '입장 안내',
    title: '[필독] 모바일 티켓 캡처본 입장 불가 안내',
    content:
      '반드시 전용 앱을 실행하여 QR코드를 제시해주셔야 합니다. 캡처본은 입장이 제한될 수 있습니다.',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: true,
    isSaved: true,
    createdAt: '10분 전',
  },
  {
    announcementId: 9,
    categoryName: '이벤트',
    title: '🎁 선착순 1,000명 슬로건 증정 이벤트',
    content:
      '메인 게이트 우측 이벤트 부스에서 팔찌 교환 시 선착순으로 공식 슬로건을 드립니다!',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: true,
    isSaved: false,
    createdAt: '30분 전',
  },

  {
    announcementId: 8,
    categoryName: 'MD',
    title: '공식 MD 품절 현황 (14:00 기준)',
    content:
      '아티스트 A의 티셔츠 L 사이즈가 전량 품절되었습니다. 재입고 예정은 없으니 양해 부탁드립니다.',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: false,
    isSaved: false,
    createdAt: '1시간 전',
  },
  {
    announcementId: 7,
    categoryName: '운영 시간',
    title: 'F&B 푸드존 운영 시간 1시간 연장',
    content:
      '관객 여러분의 성원에 힘입어 푸드존 운영을 기존 22시에서 23시까지 연장합니다.',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: false,
    isSaved: true,
    createdAt: '2시간 전',
  },
  {
    announcementId: 6,
    categoryName: '기타',
    title: '분실물 센터 위치 및 운영 안내',
    content:
      '종합 안내소 옆 분실물 센터가 운영 중입니다. 습득하신 물건은 이쪽으로 접수 부탁드립니다.',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: false,
    isSaved: false,
    createdAt: '3시간 전',
  },
  // 6. 입장 현황 (이미지 있음)
  {
    announcementId: 5,
    categoryName: '입장 안내',
    title: '메인 게이트 대기열 현황',
    content:
      '현재 메인 게이트 입장 대기 시간이 약 40분 소요됩니다. 서브 게이트를 이용하시면 더 빠르게 입장 가능합니다.',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: false,
    isSaved: false,
    createdAt: '4시간 전',
  },
  // 7. 이벤트 당첨자 발표 (이미지 없음)
  {
    announcementId: 4,
    categoryName: '이벤트',
    title: '아티스트 사인회 당첨자 발표',
    content:
      '사인회 당첨되신 분들은 15시까지 수변무대 옆 사인회 부스로 와주세요. 신분증 지참 필수!',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: false,
    isSaved: true,
    createdAt: '5시간 전',
  },
  // 8. MD 판매 안내 (이미지 있음)
  {
    announcementId: 3,
    categoryName: 'MD',
    title: '응원봉 배터리 현장 판매 안내',
    content:
      'MD 부스에서 AAA 건전지를 판매하고 있습니다. (2개입 1,000원 / 카드 결제만 가능)',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: true,
    isSaved: false,
    createdAt: '1일 전',
  },
  // 9. 마감 임박 (이미지 없음)
  {
    announcementId: 2,
    categoryName: '운영 시간',
    title: '물품보관소 접수 마감 임박',
    content:
      '물품보관소 신규 접수가 곧 마감됩니다. 짐을 맡기실 분들은 서둘러 방문해주세요.',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: false,
    isSaved: false,
    createdAt: '1일 전',
  },
  // 10. 전체 공지 (이미지 있음)
  {
    announcementId: 1,
    categoryName: '전체',
    title: '[공지] 공연장 내 생수 외 반입 금지',
    content:
      '500ml 이하의 PET 생수만 반입 가능합니다. 주류 및 외부 음식물은 반입 불가하오니 협조 부탁드립니다.',
    imageUrl:
      'https://cdn.newstnt.com/news/photo/202511/551464_577865_1821.jpg',
    isPinned: false,
    isSaved: false,
    createdAt: '2일 전',
  },
];

export const FESTIVAL_MOCK: FestivalMockProps = {
  dday: 'D-5',
  title: 'Grand Mint Festival',
  location: '여의도공원 일대',
  date: '2025.10.15 - 2025.10.18',
};
