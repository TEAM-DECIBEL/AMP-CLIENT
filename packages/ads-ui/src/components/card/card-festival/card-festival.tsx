import type { ComponentPropsWithoutRef, ReactElement, ReactNode } from 'react';

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

type SlotProps = ComponentPropsWithoutRef<'div'> & { children: ReactNode };

const Button = ({ children, ...rest }: SlotProps) => (
  <div className={styles.buttonSlot} {...rest}>
    {children}
  </div>
);

const Icon = ({ children }: { children: ReactNode }) => (
  <div className={styles.iconSlot}>{children}</div>
);

type RootProps = ComponentPropsWithoutRef<'article'> & {
  children: ReactNode;
};

const Root = ({ children, ...rest }: RootProps) => (
  <article className={styles.card} {...rest}>
    {children}
  </article>
);

type CardFestivalComponent = ((props: RootProps) => ReactElement) & {
  Image: typeof Image;
  Body: typeof Body;
  Chip: typeof Chip;
  Button: typeof Button;
  Icon: typeof Icon;
};

export const CardFestival = Object.assign(Root, {
  Image,
  Body,
  Chip,
  Button,
  Icon,
}) as CardFestivalComponent;

export default CardFestival;
