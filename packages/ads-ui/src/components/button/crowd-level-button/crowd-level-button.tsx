import * as styles from './crowd-level-button.css';

type CrowdVariant = 'low' | 'medium' | 'high';

const crowdLabels: Record<CrowdVariant, string> = {
  low: '여유',
  medium: '보통',
  high: '혼잡',
};

interface CrowdLevelButtonProps {
  variant: CrowdVariant;
  imageUrl: string;
  selected: boolean;
  onChange: (nextSelected: boolean) => void;
}

const CrowdLevelButton = ({
  variant,
  imageUrl,
  selected,
  onChange,
}: CrowdLevelButtonProps) => {
  const label = crowdLabels[variant];

  return (
    <button
      type='button'
      className={styles.crowdLevelButton}
      aria-pressed={selected}
      onClick={() => onChange(!selected)}
    >
      <img src={imageUrl} className={styles.image} />
      {label}
    </button>
  );
};

export default CrowdLevelButton;
