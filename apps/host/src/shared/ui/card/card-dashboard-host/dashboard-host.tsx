import * as styles from './dashboard-host.css';

interface DashboardHostProps {
  ongoingCount: number;
  upcomingCount: number;
}

const DashboardHost = ({ ongoingCount, upcomingCount }: DashboardHostProps) => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.content}>
        <p className={styles.textStyle}>진행 중인 공연</p>
        <span className={styles.numberStyle}>{ongoingCount}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.content}>
        <p className={styles.textStyle}>진행 예정 공연</p>
        <span className={styles.numberStyle}>{upcomingCount}</span>
      </div>
    </section>
  );
};

export default DashboardHost;
