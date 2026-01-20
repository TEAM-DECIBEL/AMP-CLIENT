import type { ReactNode } from 'react';

import * as styles from './form-field.css';

type FieldProps = {
  label?: string;
  children: ReactNode;
};

const FormField = ({ label, children }: FieldProps) => {
  return (
    <div className={styles.field}>
      {label && <p className={styles.fieldLabel}>{label}</p>}
      {children}
    </div>
  );
};

export default FormField;
