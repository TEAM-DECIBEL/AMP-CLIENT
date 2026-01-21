export interface NoticeCategory {
  categoryId: number;
  categoryName: string;
  categoryCode: string;
}

export interface NoticeAuthor {
  userId: number;
  nickname: string;
}

export interface NoticeDetailResponse {
  noticeId: number;
  festivalId: number;
  festivalTitle: string;
  category: NoticeCategory;
  title: string;
  content: string;
  imageUrl: string | null;
  isPinned: boolean;
  isSaved: boolean;
  author: NoticeAuthor;
  createdAt: string;
}
