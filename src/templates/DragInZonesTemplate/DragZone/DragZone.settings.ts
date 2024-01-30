export const setHorizontal = (
  index: number,
  length: number,
  deviceWidth: number,
) => {
  if (deviceWidth > 1200) {
    return `${(index - 4) * 100}%`;
  }

  if (deviceWidth > 769) {
    if (index > length / 2) {
      return `${(index - 7) * 100}%`;
    }

    return `${(index - 2) * 100}%`;
  }

  if (index < length / 3) {
    return `${(index - 1) * 100}%`;
  }

  if (index < (2 * length) / 3) {
    return `${(index - 4) * 100}%`;
  }

  return `${(index - 7) * 100}%`;
};

export const setVertical = (
  index: number,
  length: number,
  deviceWidth: number,
) => {
  if (deviceWidth > 1200) {
    return '0%';
  }

  if (deviceWidth > 769) {
    if (index <= length / 2) {
      return '0%';
    }

    return '100%';
  }

  if (index < length / 3) {
    return '0%';
  }

  if (index < (2 * length) / 3) {
    return '100%';
  }

  return '200%';
};
