/**
 * INTERFACES
 * Another way typescript checks for errors as its being compiled to Javascript.
 * 
 * Is a definition for an object that tells typescript what that object is going to be.
 * 
 * Interface: can loosely be called the blueprint for an object.
 */

function printName(stark) {
    console.log(stark.name)

}

printName({ name: "Sushank" });
printName({ label: "Sushank" });  //This will return an undefined when printed in the console on running node 03_interfaces.js 

//Now adding an interface for a similar function. And then the typescript will catch this error even before compiling.
interface Rana {
    name: string;
    age: number;           
    male?: boolean;      // his is an option parameter. But if we dont give this then last printRana 
                         // object will fail on compilation
}

function printRana(details: Rana) {
    console.log(`${details.name}; ${details.age}; ${details.male}`)
}

printRana({name:"Sushank", age:22, male:true});
printRana({name:"Shiven", age:12, male:true});
printRana({name:"Kusum", age:42}); // The output will be printed as undefined

