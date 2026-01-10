import type { ReactNode } from 'react';

import { chip } from './chip.css';

interface ChipBaseProps {
  children: ReactNode;
  className?: string;
}

interface ChipStatusProps extends ChipBaseProps {
  variant: 'chip_status';
  status: 'current' | 'upcoming' | 'dday';
}

interface ChipDayProps extends ChipBaseProps {
  variant: 'chip_day';
  status: 'color' | 'gray';
}

interface ChipMyPageProps extends ChipBaseProps {
  variant: 'chip_mypage';
  status?: never;
}

type ChipProps = ChipStatusProps | ChipDayProps | ChipMyPageProps;

const Chip = (props: ChipProps) => {
  const { className, children, variant } = props;

  const chipClassName =
    variant === 'chip_mypage'
      ? chip({ variant })
      : chip({ variant, status: props.status });

  return (
    <span className={[chipClassName, className].filter(Boolean).join(' ')}>
      {children}
    </span>
  );
};

export default Chip;
