export const onlyDigits = (s: string): string => s.replace(/\D/g, '');

export const formatDateYYYYMMDD = (digits: string, isDeleting: boolean) => {
  const d = digits.slice(0, 8);
  const y = d.slice(0, 4);
  const m = d.slice(4, 6);
  const day = d.slice(6, 8);

  if (d.length <= 3) {
    return d;
  }
  if (d.length === 4) {
    return isDeleting ? y : `${y}-`;
  }

  if (d.length <= 6) {
    const ym = `${y}-${m}`;
    if (d.length === 6) {
      return isDeleting ? ym : `${ym}-`;
    }
    return ym;
  }

  return `${y}-${m}-${day}`;
};

export const formatTimeHHMM = (digits: string, isDeleting: boolean) => {
  const d = digits.slice(0, 4);
  const hh = d.slice(0, 2);
  const mm = d.slice(2, 4);

  if (d.length <= 1) {
    return d;
  }

  if (d.length === 2) {
    return isDeleting ? hh : `${hh}:`;
  }

  return `${hh}:${mm}`;
};
