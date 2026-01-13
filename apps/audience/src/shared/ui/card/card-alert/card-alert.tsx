import * as styles from './card-alert.css';

interface AlertCardProps {
  title: string;
  description: string;
  time: string;
  isRead: boolean;
}

const AlertCard = ({ title, description, time, isRead }: AlertCardProps) => {
  return (
    <article
      className={[styles.alertCard, isRead && styles.read]
        .filter(Boolean)
        .join(' ')}
    >
      <div className={styles.titleSection}>
        <p className={styles.title}>{title}</p>
        <span className={styles.time}>{time}</span>
      </div>

      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default AlertCard;
