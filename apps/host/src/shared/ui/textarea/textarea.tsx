import * as styles from './textarea.css';

type TextareaProps = Omit<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>,
  'className'
>;

const Textarea = (props: TextareaProps) => {
  return <textarea className={styles.textarea} {...props} />;
};

export default Textarea;
