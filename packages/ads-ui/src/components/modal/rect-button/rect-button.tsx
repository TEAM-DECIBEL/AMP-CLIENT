import type { ButtonHTMLAttributes, ReactNode } from 'react';

import * as s from './rect-button.css';

type Variant = 'primary' | 'secondary';

interface RectButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
}

const RectButton = ({
  children,
  variant,
  type = 'button',
  ...rest
}: RectButtonProps) => {
  return (
    <button type={type} className={s.rectButton({ variant })} {...rest}>
      {children}
    </button>
  );
};

export default RectButton;
