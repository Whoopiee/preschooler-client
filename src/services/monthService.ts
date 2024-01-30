import { Month, months } from '@customTypes/game';

function getCurrent(): Month {
  return 'january';
}

function getMonthIndex(month: Month): number {
  return months.indexOf(month);
}

function isLastMonth(month: Month): boolean {
  const currentMonthIndex = getMonthIndex(getCurrent());
  const targetMonthIndex = getMonthIndex(month);

  return targetMonthIndex <= currentMonthIndex;
}

export const monthService = {
  months,
  getCurrent,
  isLastMonth,
};
