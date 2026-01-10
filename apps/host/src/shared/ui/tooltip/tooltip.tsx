import * as styles from "./tooltip.css";
import { PointIcon } from "@shared/assets/icons";

const Tooltip = () => {
  return (
    <div className={styles.stack}>
      <div className={styles.container} role="tooltip">
        <div className={styles.content}>
          <p className={styles.title}>공연을 추가해보세요!</p>
          <p className={styles.description}>
            공연 추가 후 공지를 작성할 수 있어요
          </p>
        </div>
      </div>
      <PointIcon className={styles.arrowIcon} />
    </div>
  );
};

export default Tooltip;
