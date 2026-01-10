import * as styles from "./tooltip.css";

const Tooltip = () => {
  return (
    <div style={styles.container} role="tooltip">
      <div style={styles.content}>
        <p style={styles.title}>공연을 추가해보세요!</p>
        <p style={styles.description}>공연 추가 후 공지를 작성할 수 있어요</p>
      </div>
    </div>
  );
};

export default Tooltip;
