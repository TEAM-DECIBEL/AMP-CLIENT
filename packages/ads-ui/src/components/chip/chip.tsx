import { clsx } from 'clsx';
import type { ReactNode } from 'react';

import { chip } from './chip.css';

interface ChipBaseProps {
  children: ReactNode;
  className?: string;
}

interface ChipStatusProps extends ChipBaseProps {
  variant: 'status';
  status: 'current' | 'upcoming' | 'dday';
}

interface ChipDayProps extends ChipBaseProps {
  variant: 'day';
  status: 'color' | 'gray';
}

interface ChipMyPageProps extends ChipBaseProps {
  variant: 'mypage';
  status?: never;
}

type ChipProps = ChipStatusProps | ChipDayProps | ChipMyPageProps;

const Chip = (props: ChipProps) => {
  const { className, children, variant } = props;

  const chipClassName =
    variant === 'mypage'
      ? chip({ variant })
      : chip({ variant, status: props.status });

  return <span className={clsx(chipClassName, className)}>{children}</span>;
};

export default Chip;
