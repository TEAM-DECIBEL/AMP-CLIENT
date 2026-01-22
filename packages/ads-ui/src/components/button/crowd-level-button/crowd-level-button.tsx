import * as styles from './crowd-level-button.css';

type CrowdVariant = 'smooth' | 'normal' | 'crowded';

const crowdLabels: Record<CrowdVariant, string> = {
  smooth: '여유',
  normal: '보통',
  crowded: '혼잡',
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
