import type { ReactNode } from 'react';

import { emptyCard } from './empty-card.css';

interface EmptyCardProps {
  children: ReactNode;
  className?: string;
}

const EmptyCard = ({ className, children }: EmptyCardProps) => {
  return (
    <div className={[emptyCard, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
};

export default EmptyCard;
