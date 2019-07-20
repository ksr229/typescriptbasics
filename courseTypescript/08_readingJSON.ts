/**
 * In order to import the JSON into the TS file we need to add resolveJsonModule= true in the tsconfig.json file
 */
import * as data from '../courseTypescript/object.json';
let word = data.locators.homepage
const url = data.url
const password = data.locators.password
console.log(word.button);
console.log(word.img)
console.log(url)
console.log(password)

console.log(typeof(password))

