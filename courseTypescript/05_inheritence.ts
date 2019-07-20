export {}
class Person {
    name: String

    constructor(name: String = "Default") {
        this.name = name;

    }

    userDetails() {
        console.log(`The name of the User is: ${this.name}`);
    }

    test(){
        console.log("********###############********")
    }

}

var user1 = new Person("Sushank");
user1.userDetails();

// This is how you can inherit the properties and methods of the Person class into the child class. Keyword used is extends. Overwriting the methods is allowed as below.

class extraDetails extends Person {
    id: Number;

    userId() {
        return this.id = 12;
    }

    userDetails() {
        super.test() // All the methods inside the superclass can be called like this. using the super keyword.
        super.userDetails()
        console.log(`The user ID is: ${this.userId()}`);
        console.log(`This proptery is coming from parent class: ${this.name}`) 
    }
}

var user2 = new extraDetails("Ajay");
user2.userDetails();