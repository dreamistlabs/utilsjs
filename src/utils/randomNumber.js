/**
 * Generate a random number and return that value to the exponent power.
 * @param {number} count - The number of digits to randomize.
 * @return {string}
 */
export const randomNumber = count => {
  let rand = Math.random();

  // prevents returning a number with fewer than the required number of digits [count]
  while (rand < 0.1) {
    rand = Math.random();
  }

  return Math.floor(rand * Math.pow(10, count)).toString();
};
