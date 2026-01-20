import { CardNotice, EmptyView } from '@amp/ads-ui';

import * as styles from './notice-card-list.css';

// TODO: 현재는 목데이터 기준, 추후 type에서 import
interface NoticeItem {
  announcementId: number;
  imageUrl: string | null;
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: string;
  categoryName?: string;
}

interface NoticeCardListProps {
  notices: NoticeItem[];
  onItemClick: (id: number) => void;
}

// TODO: 기본 이미지 상수 import
const DEFAULT_IMG = ''; // 예: '/assets/images/default-notice.png'

const NoticeCardList = ({ notices, onItemClick }: NoticeCardListProps) => {
  if (notices.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <EmptyView title='작성된 공지가 없어요.' />
      </div>
    );
  }

  return (
    <div className={styles.cardList}>
      {notices.map((notice) => (
        <div key={notice.announcementId} className={styles.card}>
          <CardNotice
            // TODO: 기본 이미지 처리 로직 적용
            imageUrl={notice.imageUrl || DEFAULT_IMG}
            title={notice.title}
            content={notice.content}
            isPinned={notice.isPinned}
            createdAt={notice.createdAt}
            onClick={() => onItemClick(notice.announcementId)}
          />
        </div>
      ))}
    </div>
  );
};

export default NoticeCardList;
