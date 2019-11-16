/**
 * Return a random index value based on the array list passed in.
 * @function
 * @param {array} list - A list or array of items.
 * @return {number} Random index value.
 */
export const getRandomIndex = list => {
  return Math.floor(Math.random() * list.length);
};
