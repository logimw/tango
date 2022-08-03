export const countDateOfDeath = (
  yearOfBirth: string | RegExpMatchArray | null,
  yearOfDeath: string | RegExpMatchArray | null
) => {
  const yearOfBirthNumber = Number(yearOfBirth);
  const yearOfDeathNumber = Number(yearOfDeath);
  const age = yearOfDeathNumber - yearOfBirthNumber;
  if (age < 0) return (yearOfBirthNumber + yearOfBirthNumber).toString();
  return age.toString();
};
