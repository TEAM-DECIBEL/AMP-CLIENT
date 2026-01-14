import { InputHTMLAttributes } from 'react';

import { CheckIcon } from '../../../icons';

import * as styles from './check-button.css';

const CheckButton = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
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
