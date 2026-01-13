import * as styles from './role-button.css';

type RoleVariant = 'audience' | 'host';

const roleLabels: Record<RoleVariant, string> = {
  audience: '관객으로 시작하기',
  host: '주최사로 시작하기',
} as const;

interface RoleButtonProps {
  variant: RoleVariant;
  imageUrl: string;
  selected: boolean;
  onChange: (nextSelected: boolean) => void;
}

const RoleButton = ({
  variant,
  imageUrl,
  selected,
  onChange,
}: RoleButtonProps) => {
  return (
    <button
      type='button'
      className={styles.roleContainer}
      aria-pressed={selected}
      onClick={() => onChange(!selected)}
    >
      <img src={imageUrl} className={styles.image} />
      {roleLabels[variant]}
    </button>
  );
};

export default RoleButton;
