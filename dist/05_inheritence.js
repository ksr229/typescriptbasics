"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name) {
        if (name === void 0) { name = "Default"; }
        this.name = name;
    }
    Person.prototype.userDetails = function () {
        console.log("The name of the User is: " + this.name);
    };
    Person.prototype.test = function () {
        console.log("********###############********");
    };
    return Person;
}());
var user1 = new Person("Sushank");
user1.userDetails();
// This is how you can inherit the properties and methods of the Person class into the child class. Keyword used is extends. Overwriting the methods is allowed as below.
var extraDetails = /** @class */ (function (_super) {
    __extends(extraDetails, _super);
    function extraDetails() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    extraDetails.prototype.userId = function () {
        return this.id = 12;
    };
    extraDetails.prototype.userDetails = function () {
        _super.prototype.test.call(this); // All the methods inside the superclass can be called like this. using the super keyword.
        _super.prototype.userDetails.call(this);
        console.log("The user ID is: " + this.userId());
        console.log("This proptery is coming from parent class: " + this.name);
    };
    return extraDetails;
}(Person));
var user2 = new extraDetails("Ajay");
user2.userDetails();
