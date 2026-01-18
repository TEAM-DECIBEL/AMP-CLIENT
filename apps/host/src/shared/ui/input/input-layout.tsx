import type { ReactNode } from 'react';

import * as styles from './input-layout.css';

interface InputLayoutProps {
  id?: string;
  label: string;
  isEssential: boolean;
  children: ReactNode;
}

const InputLayout = ({
  id,
  label,
  isEssential = false,
  children,
}: InputLayoutProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.labelContainer}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>

        {isEssential && (
          <span className={styles.requiredStar} aria-hidden='true'>
            *
          </span>
        )}
      </div>
      {children}
    </div>
  );
};

export default InputLayout;
