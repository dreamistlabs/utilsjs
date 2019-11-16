# gimmejs-number
[![Build Status](https://travis-ci.org/dreamistlabs/gimmejs-number.svg?branch=master)](https://travis-ci.org/dreamistlabs/gimmejs-number)
[![Coverage Status](https://coveralls.io/repos/github/dreamistlabs/gimmejs-number/badge.svg?branch=master)](https://coveralls.io/github/dreamistlabs/gimmejs-number?branch=master)
[![node](https://img.shields.io/node/v/passport.svg?branch=master)](https://github.com/dreamistlabs/gimmejs-number)
[![Gitter](https://img.shields.io/gitter/room/TechnologyAdvice/Stardust.svg?style=flat)](https://gitter.im/dreamist-labs/gimmejs)
[![License](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/dreamistlabs/gimmejs-number/blob/master/LICENSE)

Oh, you want a randomly generated number? Just say gimme!

## Installation
Use npm.
```
npm install gimmejs-number --save
```

But yarn works too.
```
yarn add gimmejs-number
```

## Usage
```
let gimme = require('gimmejs-number');
gimme.number(); // 8
```

## API
### #number( digits, formatted, decimals )
| Parameters/Return      | Data Type | Default Value |
| ---------------------- | --------- | ------------- |
| @param digits          | number    | 1 (max: 20)   |
| @param formatted       | boolean   | false         |
| @param decimals        | boolean   | false         |

**Note on @return value**
If no arguments or only the first argument is provided, then the return value will be a number.
If the 2nd or 3rd arguments are provided, then the return value will be a string.

### Examples
```
gimme.number();
8

gimme.number(8);
48294519

gimme.number(7, true);
4,284,569

gimme.number(4, true, true);
9,143.94

gimme.number(6, false, true);
475027.74
```

### #numbers( quantity, digits, formatted, decimals )
| Parameters/Return      | Data Type | Default Value |
| ---------------------- | --------- | ------------- |
| @param quantity        | number    | 1             |
| @param digits          | number    | 1 (max: 20)   |
| @param formatted       | boolean   | false         |
| @param decimals        | boolean   | false         |
| @return                | array     |               |

### Examples
```
gimme.numbers();
[ 8 ]

gimme.numbers(8);
[ 5, 6, 8, 4, 9, 7, 7, 9 ]

gimme.numbers(5, 7, true);
[ '3,766,845', '5,761,274', '2,177,633', '8,325,873', '5,930,950' ]

gimme.numbers(10, 4, true, true);
[ '3,606.36',
  '8,014.89',
  '4,193.16',
  '4,081.94',
  '1,297.63',
  '9,104.99',
  '2,958.10',
  '5,901.53',
  '5,472.88',
  '7,601.82' ]

gimme.numbers(6, 6, false, true);
[ '225427.49',
  '620976.67',
  '515943.12',
  '832214.61',
  '139875.42',
  '690960.25' ]
```

## Contributing
Coming soon

## License
[MIT](https://github.com/dreamistlabs/gimmejs-number/blob/master/LICENSE)
