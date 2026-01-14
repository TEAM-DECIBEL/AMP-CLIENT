import React from 'react';

import * as styles from './dashboard.css';

interface DashboardProps {
  ongoingCount: number;
  upcomingCount: number;
}

const Dashboard = ({ ongoingCount, upcomingCount }: DashboardProps) => {
  const items = [
    { label: '진행 중인 공연', count: ongoingCount },
    { label: '진행 예정 공연', count: upcomingCount },
  ] as const;

  return (
    <section className={styles.dashboard} aria-label='공연 현황'>
      {items.map(({ label, count }, idx) => (
        <React.Fragment key={label}>
          <div className={styles.content}>
            <p className={styles.text}>{label}</p>
            <span className={styles.count}>{count}</span>
          </div>

          {idx < items.length - 1 && (
            <div className={styles.divider} aria-hidden='true' />
          )}
        </React.Fragment>
      ))}
    </section>
  );
};

export default Dashboard;
