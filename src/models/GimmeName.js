// import GimmeError from './GimmeError';
// import { typeValidator, listOfNames } from '../utils';

// console.log(listOfNames);

// class GimmeName {

// // TODO: FEATURES
// // Should have option to choose to include salutation
// // Should have option to choose to include suffix?

// constructor(gender = 'male', salutation = false) {
//   [this._gender, this._salutation] = [gender, salutation];
//   // this.validate(this._digits, this._formatted, this._decimal);
//   this._result = this.output();
// }

// get result() {
//   return this._result;
// }

//   /**
//    * Get the randomly generated name.
//    * @return { String }
//    */
//   output() {
//     let result = this.randomNumber(this._digits);

//     if (this._formatted) {
//       result = this.format(result);
//     }

//     if (this._decimal) {
//       result = this.addDecimal(result);
//     }

//     return result;
//   }

// /* Generates a random name based on the arguments (if any) passed in.
//  * @param   { Array } [...opts]
//  * @return  { String }
//  */
// function createName(...opts) {
//   let validOptions;

//   if (opts.length <= 0) {
//     return `${getName('firstName')} ${getName('lastName')}`;
//   }

//   // checks and verifies the arguments passed in, removing any invalid
//   // arguments and returning only valid ones.
//   // Output:
//   validOptions = validateOptions(opts);
//   // console.log(validOptions);

//   return /^male|m$/i.test(validOptions['gender']) ? generateName('male') : generateName('female');
// }

// /**
//  * Verifies the options being passed in, rejecting invalid and only returning
//  * valid arguments.
//  * @param   { Array } [options]
//  * @return  { Object }
//  */
// function validateOptions(options) {
//   // this function needs to identify, filter, and address all possible
//   // errors. It should only return a valid options hash for the rest of
//   // the api to process. After this point, there should not be any errors
//   // as everything being passed has been filtered.

//   let acceptedOptions = ['gender', 'salutation'];
//   let object = {};

//   // check if an argument is an object
//   options.forEach(function(option) {
//     if (option.constructor === Object) {

//       for (let key in option) {
//         if (acceptedOptions.includes(key.toLowerCase())) {

//           // once the key is verified, check for the key's value
//           // and make sure that it is a valid option as well.
//           object[key] = option[key];
//         } else {
//           // send/log a warning message informing user their
//           // object contains an argument(s) that are not valid?
//         }
//       }

//     } else {
//       // send/log a warning message informing user that they
//       // passed in additional arguments, outside of the options {},
//       // which is not valid, and therefore ignored
//     }

//   });

//   return object;
// }

// function generateName(gender = null) {
//   const firstName = getName('firstName', gender);
//   const lastName = getName('lastName');

//   return `${firstName} ${lastName}`;
// }

// /**
//  * Randomly picks, either, a first name or a last name from the names list.
//  * If a gender is provided, the first name returned will be from that gender's
//  * list. Otherwise, the function will randomly choose among both lists.
//  * @param   { String } [name]
//  * @param   { String } [gender] -- default value: null
//  * @return  { String }
//  */
// function getName(name, gender = null) {
//   let names;
//   let randomlyChooseGender = Object.keys(namesList[name])[randomize(Object.keys(namesList[name]))];

//   switch(name) {
//     case "firstName":
//       names = gender ? namesList[name][gender] : namesList[name][randomlyChooseGender];
//       break;
//     default:
//       names = namesList[name];
//       break;
//   }
//   return names[randomize(names)];
// }

// /**
//  * Generates a random integer value between zero and the length of the
//  * list passed in.
//  * @param   { Array } [list]
//  * @return  { Number }
//  */
// function randomize(list) {
//   return Math.floor(Math.random() * list.length);
// }
// }

// export default GimmeName;
