export const ascSortById = (a: { id: number }, b: { id: number }) =>
  a.id - b.id;

export const dscSortById = (a: { id: number }, b: { id: number }) =>
  b.id - a.id;

export const ascSortByFillLevel = (
  a: { fillLevel: number },
  b: { fillLevel: number }
) => a.fillLevel - b.fillLevel;

export const dscSortByFillLevel = (
  a: { fillLevel: number },
  b: { fillLevel: number }
) => b.fillLevel - a.fillLevel;
