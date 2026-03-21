import type { ReactNode } from 'react';

import * as styles from './form-field.css';

interface FormFieldProps {
  id?: string;
  label?: string;
  children: ReactNode;
}

const FormField = ({ id, label, children }: FormFieldProps) => {
  return (
    <div className={styles.field}>
      {label &&
        (id ? (
          <label htmlFor={id} className={styles.fieldLabel}>
            {label}
          </label>
        ) : (
          <span className={styles.fieldLabel}>{label}</span>
        ))}
      {children}
    </div>
  );
};

export default FormField;
