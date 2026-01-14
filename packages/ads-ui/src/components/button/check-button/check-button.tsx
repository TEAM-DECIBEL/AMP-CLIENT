import { InputHTMLAttributes } from 'react';

import { CheckIcon } from '../../../icons';

import * as styles from './check-button.css';

const CheckButton = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <label className={styles.root}>
      <input type='checkbox' className={styles.input} {...props} />
      <span className={styles.icon} aria-hidden='true'>
        <CheckIcon />
      </span>
    </label>
  );
};

export default CheckButton;
