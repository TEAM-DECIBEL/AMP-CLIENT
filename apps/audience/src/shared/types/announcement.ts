export interface Announcement {
  noticeId: number;
  categoryName: string;
  title: string;
  content: string;
  imageUrl: string | null;
  isPinned: boolean;
  isSaved: boolean;
  createdAt: string;
}
