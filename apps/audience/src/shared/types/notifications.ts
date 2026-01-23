export interface NotificationsItem {
  notificationId: number;
  title: string;
  message: string;
  isRead: boolean;
  noticeId: number;
  createdData: string;
  festivalId: number;
}

export interface NotificationsResponse {
  notificationResponseList: NotificationsItem[];
}
