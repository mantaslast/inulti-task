/**
 * Field must have at least two words
 * @param value
 * @returns
 */
export const minTwoWords = (value: string) =>
  value.trim().split(" ").length >= 2;

/**
 *  Each word of the input has to have at least two characters
 */
export const eachWordLengthTwo = (value: string) =>
  value
    .trim()
    .split(" ")
    .every((item) => item.length >= 2);

/**
 * (ONLY CREDIT CARD EXPIRY DATE)
 * The date provided must not be in the past
 * @param value 'MM/YY'
 */
export const ccNotPastExpiration = (value: string) => {
  const [month, year] = value.split("/");
  if (month.length < 2 || year.length < 2) return false;
  const expiryDate = `20${year}-${month}-01`;
  const date = new Date();
  const datePrevMonth = new Date(
    date.getFullYear(),
    date.getMonth() - 1,
    date.getMonth()
  );
  return datePrevMonth < new Date(expiryDate);
};

/**
 * Checks if provided date yyyy-mm-dd is over 18
 * @param value
 * @returns
 */
export const ageOver18 = (value: string) => {
  const optimizedBirthday = value.replace(/-/g, "/");
  const myBirthday = new Date(optimizedBirthday);
  const currentDate = new Date().toJSON().slice(0, 10) + " 01:00:00";
  const myAge = ~~((Date.now(currentDate) - myBirthday) / 31557600000);
  return myAge >= 18;
};
