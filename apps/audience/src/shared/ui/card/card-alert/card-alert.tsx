import * as styles from './card-alert.css';

interface AlertCardProps {
  title: string;
  description: string;
  time: string;
  isRead: boolean;
  onClick: () => void;
}

const AlertCard = ({
  title,
  description,
  time,
  isRead,
  onClick,
}: AlertCardProps) => {
  return (
    <button
      type='button'
      className={[styles.alertCard, isRead && styles.read]
        .filter(Boolean)
        .join(' ')}
      onClick={onClick}
    >
      <div className={styles.titleSection}>
        <p className={styles.title}>{title}</p>
        <span className={styles.time}>{time}</span>
      </div>

      <p className={styles.description}>{description}</p>
    </button>
  );
};

export default AlertCard;
