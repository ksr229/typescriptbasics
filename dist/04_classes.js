/**
 * Classes:
 * ********
 * Similar to interfaces but more powerful than classes.
 *
 * Classes are again blueprints of objects but need to be construncted or new instance of class need to be created.
 */
var Stark = /** @class */ (function () {
    // This is the function which gets executed first when the object for the class is created. 
    // This will contain the constructor properties.
    function Stark(saying, num) {
        this.name = "default"; // we can assign default values to the constructor properties.
        this.saying = saying; // We can create arguments for the class.
        this.num = num;
    }
    // Classes can have methods which are like functions
    Stark.prototype.methodA = function (person) {
        console.log("Hello dear, " + person);
    };
    Stark.castle = "Winterfell"; //This is a static property and to use this we will have to refer the <class_name> instead of the <object name>. See below.
    return Stark;
}());
var ned = new Stark("default saying", 1);
console.log("When no name is defined: " + ned.name);
ned.name = "John";
console.log("When name is defined: " + ned.name);
console.log(ned.saying);
ned.saying = ned.name + " is coming"; //
console.log(ned.saying);
console.log(Stark.castle);
ned.methodA("Sushank");
