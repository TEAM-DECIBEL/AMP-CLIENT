import { CtaButton } from '@amp/ads-ui';
import { AlertIcon } from '@amp/ads-ui/icons';

import type { CategoryType } from '../category-section/category-section';
import CategorySection from '../category-section/category-section';
import type { NoticeItem } from '../notice-card-list/notice-card-list';
import NoticeCardList from '../notice-card-list/notice-card-list';

import * as styles from './notice-tab-content.css';

interface NoticeTabContentProps {
  selectedCategory: CategoryType;
  noticeList: NoticeItem[]; // TODO: Notice 타입으로 교체
  isSelectedCategory?: boolean;
  onSelectCategory: (category: CategoryType) => void;
  onAlertClick?: () => void;
  onNoticeItemClick: (id: number) => void; // TODO: 추후 타입 변경
}

const NoticeTabContent = ({
  selectedCategory,
  noticeList,
  isSelectedCategory = false,
  onSelectCategory,
  onAlertClick,
  onNoticeItemClick,
}: NoticeTabContentProps) => {
  return (
    <section className={styles.container}>
      <CategorySection
        selectedCategory={selectedCategory}
        onSelect={onSelectCategory}
      />

      {isSelectedCategory && selectedCategory !== '전체' && (
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
