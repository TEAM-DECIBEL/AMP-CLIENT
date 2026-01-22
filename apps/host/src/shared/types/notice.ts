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
