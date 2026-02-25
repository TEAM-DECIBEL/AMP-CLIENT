const formatDday = (dDay: number) => {
  if (dDay === 0) {
    return 'D-Day';
  }
  return dDay < 0 ? `D-${Math.abs(dDay)}` : `D+${Math.abs(dDay)}`;
};

export default formatDday;
