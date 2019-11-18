'use strict';

const gimme = {
  currency: require('gimmejs-currency').currency,
  name: require('gimmejs-name').create,
};

/**
 * State what the function does
 * List each @param {type} [name]
 * Include @return {type}
 */

module.exports = (() => {
  return {
    currency: gimme.currency,
    name: gimme.name,
  };
})();
