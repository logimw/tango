export const extractNumbersFromString = (str: string) => {
  const r = /\d+/;
  return str.match(r);
};
