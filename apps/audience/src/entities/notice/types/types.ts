import { Pagination } from '@shared/types';

export interface SavedNoticeItem {
  savedNoticeId: number;
  noticeId: number;
  festivalTitle: string;
  categoryName: string;
  content: string;
  title: string;
  imageUrls: string[];
}

export interface SavedNoticesResponse {
  notices: SavedNoticeItem[];
  pagination: Pagination;
}
