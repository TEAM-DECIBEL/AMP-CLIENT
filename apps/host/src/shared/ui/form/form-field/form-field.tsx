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
          <p className={styles.fieldLabel}>{label}</p>
        ))}
      {children}
    </div>
  );
};

export default FormField;
