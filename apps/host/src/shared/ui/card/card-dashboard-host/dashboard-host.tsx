import * as styles from './dashboard-host.css';

interface DashboardHostProps {
  ongoingCount: number;
  upcomingCount: number;
}

const Dashboard = ({ ongoingCount, upcomingCount }: DashboardHostProps) => {
  return (
    <section className={styles.dashboard}>
      <div className={styles.content}>
        <p className={styles.text}>진행 중인 공연</p>
        <span className={styles.count}>{ongoingCount}</span>
      </div>
      <div className={styles.divider} />
      <div className={styles.content}>
        <p className={styles.text}>진행 예정 공연</p>
        <span className={styles.count}>{upcomingCount}</span>
      </div>
    </section>
  );
};

export default Dashboard;
