import * as styles from './page-indicator.css';

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

const PageIndicator = ({ currentPage, totalPages }: PageIndicatorProps) => {
  return (
    <div className={styles.container}>
      <span>{currentPage}</span>
      <span className={styles.slash}>/</span>
      <span>{totalPages}</span>
    </div>
  );
};

export default PageIndicator;
