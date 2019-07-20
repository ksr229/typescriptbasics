"use strict";
exports.__esModule = true;
/**
 * In order to import the JSON into the TS file we need to add resolveJsonModule= true in the tsconfig.json file
 */
var data = require("../courseTypescript/object.json");
var word = data.locators.homepage;
var url = data.url;
var password = data.locators.password;
console.log(word.button);
console.log(word.img);
console.log(url);
console.log(password);
console.log(typeof (password));
