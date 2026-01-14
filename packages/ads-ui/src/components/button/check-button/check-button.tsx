import { InputHTMLAttributes } from 'react';

import { CheckIcon } from '../../../icons';

import * as styles from './check-button.css';

type CheckButtonProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

const CheckButton = (props: CheckButtonProps) => {
  return (
    <label className={styles.root}>
      <input type='checkbox' className={styles.input} {...props} />
      <div className={styles.iconContainer} aria-hidden='true'>
        <CheckIcon />
      </div>
    </label>
  );
};

export default CheckButton;
