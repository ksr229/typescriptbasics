console.log("Hello World");


function hello(string: String): void {
    console.log(`Hello ${string}`)
}
//Another way of writing a function is

const hello1 = (matchtxt:string)=>{
    console.log("Hello: " + matchtxt);
}

hello("jmm")
hello("1")
hello1("different way of writing function")