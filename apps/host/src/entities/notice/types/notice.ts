export interface CreateNoticeBody {
  title: string;
  categoryId: number;
  image?: File | null;
  content: string;
  isPinned: boolean;
}

export interface CreateNoticeResponse {
  noticeId: number;
}

export interface UpdateNoticeBody {
  festivalId: number;
  title: string;
  categoryId: number;
  newImages?: File[];
  keepImageUrls?: string[];
  content: string;
  isPinned: boolean;
}

export type UpdateNoticeResponse = Record<string, never>;

export interface NoticeDetail {
  noticeId: number;
  title: string;
  content: string;
  imageUrl: string | null;
  isPinned: boolean;
  category: {
    categoryId: number;
    categoryName: string;
    categoryCode: string;
  };
}
