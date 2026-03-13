import { CardNotice, EmptyView } from '@amp/ads-ui';

import * as styles from './notice-card-list.css';

export interface NoticeItem {
  noticeId: number;
  imageUrls: string[];
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
  categoryName?: string;
}

interface NoticeCardListProps {
  notices: NoticeItem[];
  onItemClick: (id: number) => void;
  emptyTitle: string;
}

const NoticeCardList = ({
  notices,
  onItemClick,
  emptyTitle,
}: NoticeCardListProps) => {
  if (notices.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <EmptyView imageType='alert' title={emptyTitle} />
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {notices.map((notice) => (
        <div key={notice.noticeId} className={styles.card}>
          <CardNotice
            imageUrls={notice.imageUrls}
            title={notice.title}
            content={notice.content}
            isPinned={notice.isPinned}
            createdAt={notice.createdAt}
            onClick={() => onItemClick(notice.noticeId)}
          />
        </div>
      ))}
    </div>
  );
};

export default NoticeCardList;
