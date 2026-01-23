export interface NotificationsItem {
  notificationId: number;
  title: string;
  message: string;
  isRead: boolean;
  noticeId: number;
  createdData: string;
}

export interface NotificationsResponse {
  notificationResponseList: NotificationsItem[];
}
