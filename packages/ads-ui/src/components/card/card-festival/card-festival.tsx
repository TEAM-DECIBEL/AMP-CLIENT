import type { ReactNode } from 'react';

import * as styles from './card-festival.css';

const Image = ({ src, alt }: { src: string; alt: string }) => (
  <img src={src} alt={alt} className={styles.image} />
);

interface BodyProps {
  title: string;
  date: string;
  children?: ReactNode;
}

const Body = ({ title, date, children }: BodyProps) => {
  return (
    <div className={styles.contentContainer}>
      <div>
        <p className={styles.title}>{title}</p>
        <p className={styles.duration}>{date}</p>
      </div>

      {children}
    </div>
  );
};

const Chip = ({ children }: { children: ReactNode }) => (
  <div className={styles.chip}>{children}</div>
);

const Button = ({ children }: { children: ReactNode }) => (
  <div className={styles.buttonSlot}>{children}</div>
);

const Icon = ({ children }: { children: ReactNode }) => (
  <div className={styles.iconSlot}>{children}</div>
);

const Root = ({ children }: { children: ReactNode }) => (
  <article className={styles.card}>{children}</article>
);

export const CardFestival = Object.assign(Root, {
  Image,
  Body,
  Chip,
  Button,
  Icon,
});

export default CardFestival;
