export interface SavedNotice {
  noticeId: number;
  title: string;
  content: string;
  imageUrl: string | null;
  festival: {
    festivalId: number;
    title: string;
    mainImageUrl: string;
  };
  category: {
    categoryId: number;
    categoryName: string;
    categoryCode: string;
  };
}
