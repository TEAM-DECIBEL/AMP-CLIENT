import { FlagIcon } from '../../icons';

import * as styles from './textfield.css';

interface TextFieldProps {
  variant: 'default' | 'icon';
}

const Textfield = ({ variant }: TextFieldProps) => {
  return (
    <div className={styles.textfield({ variant })}>
      {variant === 'icon' && <FlagIcon className={styles.icon} />}
      <input className={styles.input} />
    </div>
  );
};

export default Textfield;
