import * as styles from './card-alert.css';

interface AlertCardProps {
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  className?: string;
}

const AlertCard = ({
  title,
  description,
  time,
  isRead,
  className,
}: AlertCardProps) => {
  return (
    <article
      className={[styles.alertCard, isRead && styles.read, className]
        .filter(Boolean)
        .join(' ')}
    >
      <header className={styles.titleSection}>
        <p className={styles.title}>{title}</p>
        <span className={styles.time}>{time}</span>
      </header>

      <p className={styles.description}>{description}</p>
    </article>
  );
};

export default AlertCard;
