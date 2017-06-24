'use strict';

// DATABASES
// load names library
const names = require('./names/names');

/**
 * State what the function does
 * List each @param {type} [name]
 * Include @return {type}
 */

module.exports = (function() {
  function generateName() {
    let name;

    name = names["firstName"][0];

    return name;
  }

  function createName(args = []) {
      if(args.length > 0){
        // process the arguments
      } else {
        // create a random name
        return generateName();
      }
    }

  return {
    createName: createName
  }
})();