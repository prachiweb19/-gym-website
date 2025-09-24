console.log("functions in JavaScript");


// functions 
function greet (name){
    console.log(name +" is a good girl")
}

//  passing arguments to a function:
let GreetText ="good morning";
let name1 ="name1";
function greet (name, greet="greetings from javascript ")
// default value of argument
{
    console.log(name +" is a good girl")
}
console.log(GreetText + "" + name);

// anothjer function 
function sum(a,b,c){
    let d= a+b+c;
    return d;
}

let name4 = "prachi";
let name5 = "priya";
let name6 = "swati";
let name7 = "shamita";
// console.log( name4+ " is a good girl");
// console.log( name5+ " is a good girl");
// console.log( name6+ " is a good girl");
// console.log( name7+ " is a good girl");

greet(name4,GreetText)
greet(name5, GreetText)
greet(name6,GreetText)
greet(name7,GreetText)

let returnval=  + sum(1,2);
console.log(returnval)

