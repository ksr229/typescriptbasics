//NUMBER
var n = 1;
console.log(n);
//BOOLEAN
var b = false;
console.log(b);
//STRING
var c = "sushank";
console.log(c);
//ARRAY
var names = ["Sushank", "Rana", "Kanwar"];
console.log(names);
console.log(names[1]);
console.log(names.slice(1, 3));
var car = ["BMW", 2019, false, "ABS1231"];
console.log(car);
console.log(car[1]);
console.log(car[3]);
//ENUM
var fruits;
(function (fruits) {
    fruits[fruits["mango"] = 0] = "mango";
    fruits[fruits["apple"] = 1] = "apple";
    fruits[fruits["cherry"] = 2] = "cherry";
})(fruits || (fruits = {}));
;
var f = fruits.cherry;
console.log(f);
//FUNCTION
/**
 * Function format:
 * function function_name(argument: argument type) : return type {
 * }
 */
function getSomething() {
    console.log("I am a the He-man");
}
getSomething();
function getName() {
    // return 1; Not allowed as this is a number
    return "i am a string return value";
}
console.log(getName());
