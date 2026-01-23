import { Notice } from '@amp/shared/types';

export interface PaginationResponse {
  currentPage: number;
  totalPages: number;
  totalElements: number;
  size: number;
  hasNext: boolean;
  hasPrevious: boolean;
}

export interface SavedNotice {
  savedNoticeId: number;
  noticeId: number;
  festivalTitle: string;
  categoryName: string;
  title: string;
  imageUrl: string;
}

export interface SavedNoticesResponseData {
  notices: SavedNotice[];
  pagination: PaginationResponse;
}

export interface FestivalNoticesResponseData {
  announcements: Notice[];
  paginationResponse: PaginationResponse;
}

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
