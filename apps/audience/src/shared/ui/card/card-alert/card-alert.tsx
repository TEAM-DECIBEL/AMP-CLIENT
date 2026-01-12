interface AlertCard {
  title: string;
  description: string;
  time: number;
  isRead: boolean;
  className?: string;
}

const AlertCard = ({
  title,
  description,
  time,
  isRead,
  className,
}: AlertCard) => {
  return (
    <article>
      <div>
        <p>{title}</p>
        <span>{time}</span>
      </div>
      <p>{description}</p>
    </article>
  );
};

export default AlertCard;
