import { SELECT_PRESET, type SelectPreset } from './select-button-preset';

import * as styles from './select-button.css';

interface RoleButtonProps {
  preset: SelectPreset;
  imageUrl: string;
  selected: boolean;
  onChange: (nextSelected: boolean) => void;
}

const RoleButton = ({
  preset,
  imageUrl,
  selected,
  onChange,
}: RoleButtonProps) => {
  const label =
    preset.kind === 'role'
      ? SELECT_PRESET.role[preset.variant]
      : SELECT_PRESET.crowding[preset.variant];

  return (
    <button
      type='button'
      className={styles.selectButtonContainer({ kind: preset.kind })}
      aria-pressed={selected}
      onClick={() => onChange(!selected)}
    >
      <img src={imageUrl} className={styles.image({ kind: preset.kind })} />
      {label}
    </button>
  );
};

export default RoleButton;
