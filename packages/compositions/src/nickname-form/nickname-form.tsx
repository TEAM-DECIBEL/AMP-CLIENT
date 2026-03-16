import OnboardingForm from '../onboarding-form/onboarding-form';

interface NicknameFormProps {
  userType: 'host' | 'audience';
  value: string;
  onChange: (value: string) => void;
}

const NICKNAME_MAX_LENGTH = 12;

const NicknameForm = ({ userType, value, onChange }: NicknameFormProps) => {
  const nameLabelMap = { host: '주최사명', audience: '닉네임' } as const;
  const nameLabel = nameLabelMap[userType];

  return (
    <OnboardingForm
      title={
        <>
          반가워요. <br />
          {nameLabel}을 알려주세요.
        </>
      }
      label={nameLabel}
      placeholder={`${nameLabel}을 입력해주세요.`}
      maxLength={NICKNAME_MAX_LENGTH}
      value={value}
      onChange={onChange}
      supportingText={`최대 ${NICKNAME_MAX_LENGTH}자까지만 입력 가능해요.`}
    />
  );
};

export default NicknameForm;
