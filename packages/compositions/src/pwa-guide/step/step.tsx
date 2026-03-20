import * as styles from './step.css';

interface StepProps {
  step: number;
  description: string;
  imgSrc: string;
}

const Step = ({ step, description, imgSrc }: StepProps) => {
  return (
    <li className={styles.container}>
      <div className={styles.title}>
        <div className={styles.step}>
          <span>{step}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
      <img src={imgSrc} alt={`${step}단계: ${description}`} />
    </li>
  );
};

export default Step;
