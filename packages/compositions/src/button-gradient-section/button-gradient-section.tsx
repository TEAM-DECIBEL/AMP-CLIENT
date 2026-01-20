import clsx from 'clsx';
import type { ReactNode } from 'react';

import * as styles from './button-gradient-section.css';

interface ButtonGradientSectionProps {
  children: ReactNode;
  className?: string;
}

const ButtonGradientSection = ({
  children,
  className,
}: ButtonGradientSectionProps) => {
  return (
    <section className={clsx(styles.ctaButtonArea, className)}>
      {children}
    </section>
  );
};

export default ButtonGradientSection;
