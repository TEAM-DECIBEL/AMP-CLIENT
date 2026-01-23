export const CATEGORIES = [
  '전체',
  '운영 시간',
  '입장 안내',
  'MD',
  '이벤트',
  '퇴근길',
  '기타',
] as const;

export type CategoryType = (typeof CATEGORIES)[number];

export interface Notice {
  announcementId: number;
  categoryName: string;
  title: string;
  content: string;
  imageUrl: string;
  isPinned: boolean;
  isSaved: boolean; // 북마크 여부
  createdAt: string;
}