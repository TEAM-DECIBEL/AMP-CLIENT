import { CategoryButton } from '@amp/ads-ui';

import * as styles from './category-section.css';

export const CATEGORIES = [
  '전체',
  '운영 시간',
  '입장 안내',
  'MD',
  '이벤트',
  '퇴근길',
  '기타',
] as const;

export type CategoryType = (typeof CATEGORIES)[number];

interface CategorySectionProps {
  selectedCategory: CategoryType;
  onSelect: (category: CategoryType) => void;
}

const CategorySection = ({
  selectedCategory,
  onSelect,
}: CategorySectionProps) => {
  return (
    <section className={styles.chipSection}>
      {CATEGORIES.map((category) => (
        <CategoryButton
          key={category}
          variant='primary'
          selected={selectedCategory === category}
          onChange={() => onSelect(category)}
        >
          {category}
        </CategoryButton>
      ))}
    </section>
  );
};

export default CategorySection;
