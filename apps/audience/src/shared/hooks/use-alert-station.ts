import { useState } from 'react';

export interface NoticeAlert {
  id: string;
  title: string;
  message: string;
  time: string;
}

interface FetchAlertsResponse {
  items: NoticeAlert[];
  hasMore: boolean;
}

export const useAlertStation = () => {
  const [alerts, setAlerts] = useState<NoticeAlert[]>([]);
  const [readAlertIds, setReadAlertIds] = useState<string[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // 테스트용, API 연결 후 삭제
  const initMock = () => {
    const initial: NoticeAlert[] = Array.from({ length: 10 }, (_, i) => {
      const index = i + 1;

      return {
        id: `alert-${index}`,
        title: index % 3 === 0 ? '퇴근길' : '공지',
        message: `[Grand Mint Festival] 잔디마당 입장 통제`,
        time: '10',
      };
    });

    setAlerts(initial);
    setHasMore(true);
  };

  const appendMock = () => {
    const loadedCount = alerts.length;

    const next: NoticeAlert[] = Array.from({ length: 8 }, (_, i) => {
      const index = loadedCount + i + 1;

      return {
        id: `alert-${index}`,
        title: index % 3 === 0 ? '퇴근길' : '공지',
        message: `[Grand Mint Festival] ${index}잔디마당 입장 통제`,
        time: '10',
      };
    });

    setAlerts((prev) => [...prev, ...next]);

    if (loadedCount + next.length >= 40) {
      setHasMore(false);
    }
  };

  // TODO: API 연결
  const fetchAlerts = async (params?: {
    cursor?: string;
    limit?: number;
  }): Promise<FetchAlertsResponse> => {
    return { items: [], hasMore: false };
  };

  const fetchMoreAlerts = async (): Promise<void> => {};

  const markAlertAsRead = async (alertId: string): Promise<void> => {};

  const markAsReadLocal = (alertId: string) => {
    setReadAlertIds((prev) =>
      prev.includes(alertId) ? prev : [...prev, alertId],
    );
  };

  const isRead = (alertId: string) => readAlertIds.includes(alertId);

  return {
    alerts,
    isLoading,
    hasMore,
    initMock,
    appendMock,
    markAsReadLocal,
    isRead,

    fetchAlerts,
    fetchMoreAlerts,
    markAlertAsRead,
  };
};
