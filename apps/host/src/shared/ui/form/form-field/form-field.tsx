import type { ReactNode } from 'react';

import * as styles from './form-field.css';

interface FormFieldProps {
  id?: string;
  label?: string;
  children: ReactNode;
}

const FormField = ({ id, label, children }: FormFieldProps) => {
  return (
    <label className={styles.field} htmlFor={id}>
      {label && <p className={styles.fieldLabel}>{label}</p>}
      {children}
    </label>
  );
};

export default FormField;
