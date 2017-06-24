'use strict';

// DATABASES
// load names library
const namesList = require('./names/names');

/**
 * State what the function does
 * List each @param {type} [name]
 * Include @return {type}
 */


// TODO: FEATURES
// Should have option to choose male or female name
// Should have option to choose to include salutation
// Should have option to choose to include suffix?

function getRandom(name) {
  const randomize = Math.floor(Math.random() * namesList[name].length);
  return namesList[name][randomize];
}

function generateName() {
  let firstName, lastName, result;

  firstName = getRandom("firstName");
  lastName = getRandom("lastName");
  result = `${firstName} ${lastName}`;

  return result;
}


function createName(args = []) {
  if(args.length > 0){
    // process the arguments
  } else {
    // create a random name
    return generateName();
  }
}

module.exports = (function() {

  return {
    createName: createName
  }

})();
