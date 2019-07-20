//NUMBER
var n: Number = 1;
console.log(n);
//BOOLEAN
var b: boolean = false;
console.log(b);
//STRING
var c: string = "sushank";
console.log(c);
//ARRAY
var names: string[]= ["Sushank", "Rana", "Kanwar"]
console.log(names)
console.log(names[1])
console.log(names.slice(1,3));

var car: any[] = ["BMW", 2019, false, "ABS1231"]
console.log(car)
console.log(car[1])
console.log(car[3])

//ENUM
enum fruits {mango,apple,cherry};
var f:fruits = fruits.cherry;
console.log(f);

//FUNCTION
/**
 * Function format:
 * function function_name(argument: argument type) : return type {
 * }
 */
function getSomething(): void{   // nothing is returned by the function.
    console.log("I am a the He-man")
}

getSomething();

function getName(): string{    // return value is string
    // return 1; Not allowed as this is a number
    return "i am a string return value"
}
console.log(getName());