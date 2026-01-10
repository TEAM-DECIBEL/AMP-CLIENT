import { PointIcon } from "@shared/assets/icons";

import * as styles from "./tooltip.css";

const Tooltip = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content} role="tooltip">
        <p className={styles.title}>공연을 추가해보세요!</p>
        <p className={styles.description}>
          공연 추가 후 공지를 작성할 수 있어요
        </p>
      </div>
      <PointIcon className={styles.arrowIcon} aria-hidden="true" focusable="false" />
    </div>
  );
};

export default Tooltip;
