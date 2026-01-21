import { CardNotice, EmptyView } from '@amp/ads-ui';

import { IMAGES } from '../assets/index';

import * as styles from './notice-card-list.css';

export interface NoticeItem {
  noticeId: number;
  categoryName: string;
  title: string;
  content: string;
  imageUrl: string | null;
  isPinned: boolean;
  isSaved: boolean;
  createdAt: string;
}

interface NoticeCardListProps {
  notices: NoticeItem[];
  onItemClick: (id: number) => void;
}

const DEFAULT_IMG = IMAGES.EMPTY_NOTICE_CARD;

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
        <div key={notice.noticeId} className={styles.card}>
          <CardNotice
            imageUrl={notice.imageUrl || DEFAULT_IMG}
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
