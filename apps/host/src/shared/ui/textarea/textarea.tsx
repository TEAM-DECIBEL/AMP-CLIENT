import type { TextareaHTMLAttributes } from 'react';

import * as styles from './textarea.css';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = (props: TextareaProps) => {
  return <textarea className={styles.textarea} {...props} />;
};

export default Textarea;
