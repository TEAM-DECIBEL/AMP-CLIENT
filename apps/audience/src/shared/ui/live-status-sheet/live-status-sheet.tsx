import { StatusSheet, StatusSheetValue } from '@amp/ads-ui';

interface LiveStatusSheetProps {
  open: boolean;
  onClose: () => void;
  isAvailableTime: boolean;
  title: string;
  selected?: StatusSheetValue;
  onConfirm: (value: StatusSheetValue) => void;
}

const LiveStatusSheet = ({
  open,
  onClose,
  isAvailableTime,
  title,
  selected,
  onConfirm,
}: LiveStatusSheetProps) => {
  if (!isAvailableTime) {
    return <StatusSheet open={open} selectable={false} onClose={onClose} />;
  }

  return (
    <StatusSheet
      open={open}
      onClose={onClose}
      selectable
      title={title}
      selected={selected}
      onConfirm={onConfirm}
    />
  );
};

export default LiveStatusSheet;
