import { CtaButton } from '@amp/ads-ui';
import { AlertIcon } from '@amp/ads-ui/icons';
import {
  CategorySection,
  CategoryType,
  NoticeCardList,
  NoticeItem,
} from '@amp/compositions';

import * as styles from './notice-tab-content.css';

interface NoticeTabContentProps {
  selectedCategory: CategoryType;
  noticeList: NoticeItem[]; // TODO: Notice 타입으로 교체
  onSelectCategory: (category: CategoryType) => void;
  onAlertClick?: () => void;
  onNoticeItemClick: (id: number) => void; // TODO: 추후 타입 변경
}

const NoticeTabContent = ({
  selectedCategory,
  noticeList,
  onSelectCategory,
  onAlertClick,
  onNoticeItemClick,
}: NoticeTabContentProps) => {
  return (
    <section>
      <CategorySection
        selectedCategory={selectedCategory}
        onSelect={onSelectCategory}
      />

      {selectedCategory !== '전체' && (
        <div className={styles.ctaButtonContainer}>
          <CtaButton
            type='icon'
            color='gray'
            onClick={onAlertClick ?? (() => {})}
            className={styles.ctaButton}
          >
            <AlertIcon />
            {selectedCategory} 공지 알림 받기
          </CtaButton>
        </div>
      )}

      <NoticeCardList notices={noticeList} onItemClick={onNoticeItemClick} />
    </section>
  );
};

export default NoticeTabContent;
