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
  noticeId: number;
  categoryName: string;
  title: string;
  content: string;
  imageUrl: string | null;
  isPinned: boolean;
  isSaved: boolean;
  createdAt: string;
}
