import { FlagIcon } from '../../icons';

import * as styles from './textfield.css';

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'default' | 'icon';
}

const Textfield = ({ variant, ...props }: TextFieldProps) => {
  return (
    <div className={styles.textfield({ variant })}>
      {variant === 'icon' && <FlagIcon className={styles.icon} />}
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Textfield;
