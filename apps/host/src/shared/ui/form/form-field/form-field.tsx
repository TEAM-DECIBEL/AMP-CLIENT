import type { ReactNode } from 'react';

import * as styles from './form-field.css';

interface FormFieldProps {
  label?: string;
  children: ReactNode;
}

const FormField = ({ label, children }: FormFieldProps) => {
  return (
    <div className={styles.field}>
      {label && <p className={styles.fieldLabel}>{label}</p>}
      {children}
    </div>
  );
};

export default FormField;
