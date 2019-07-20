/**
 * Classes:
 * ********
 * Similar to interfaces but more powerful than classes.
 * 
 * Classes are again blueprints of objects but need to be construncted or new instance of class need to be created.
 */

class Stark {
    name: String;
    saying: string;     // NOTE: properties of the class, they cannot be declared optional, however you can have interfaces inside a class which can have optional properties.
    num: Number
    static castle: string = "Winterfell";  //This is a static property and to use this we will have to refer the <class_name> instead of the <object name>. See below.
    // This is the function which gets executed first when the object for the class is created. 
    // This will contain the constructor properties.
    constructor(saying: string, num: Number) {
        this.name = "default" // we can assign default values to the constructor properties.
        this.saying = saying  // We can create arguments for the class.
        this.num = num
    }
    // Classes can have methods which are like functions
    methodA(person: String) {

        console.log(`Hello dear, ${person}`)
    }
}

var ned = new Stark("default saying", 1);
console.log(`When no name is defined: ${ned.name}`);

ned.name = "John";
console.log(`When name is defined: ${ned.name}`);
console.log(ned.saying);

ned.saying = `${ned.name} is coming`;  //
console.log(ned.saying);
console.log(Stark.castle);
ned.methodA("Sushank")


