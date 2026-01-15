import Textfield from '../textfield/textfield';

import * as styles from './nickname-form.css';

interface NicknameFormProps {
  userType: 'host' | 'audience';
}

const NicknameForm = ({ userType }: NicknameFormProps) => {
  const nameLabelMap: Record<string, string> = {
    host: '주최사명',
    audience: '닉네임',
  };

  const nameLabel = nameLabelMap[userType] ?? '닉네임';

  return (
    <div>
      <p className={styles.title}>
        반가워요. <br />
        {nameLabel}을 알려주세요.
      </p>
      <div className={styles.nicknameForm}>
        <label className={styles.label}>{nameLabel} </label>
        <Textfield
          variant='default'
          placeholder={`${nameLabel}을 입력해주세요.`}
          maxLength={12}
        />
        <p className={styles.supportingText}>최대 12자까지만 입력 가능해요.</p>
      </div>
    </div>
  );
};

export default NicknameForm;
