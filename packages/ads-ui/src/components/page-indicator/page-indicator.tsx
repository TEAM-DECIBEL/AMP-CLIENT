import * as styles from './page-indicator.css';

interface PageIndicatorProps {
  currentPage: number;
  totalPages: number;
}

const PageIndicator = ({ currentPage, totalPages }: PageIndicatorProps) => {
  return (
    <span className={styles.container}>
      {currentPage} <span className={styles.slash}>/</span> {totalPages}
    </span>
  );
};

export default PageIndicator;
