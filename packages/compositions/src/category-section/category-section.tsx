import { CategoryButton } from '@amp/ads-ui';

import * as styles from './category-section.css';

export type CategoryType = string;

interface CategorySectionProps {
  categories: CategoryType[];
  selectedCategory: CategoryType;
  onSelect: (category: CategoryType) => void;
}

const CategorySection = ({
  categories,
  selectedCategory,
  onSelect,
}: CategorySectionProps) => {
  return (
    <section className={styles.chipSection}>
      {categories.map((category) => (
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
