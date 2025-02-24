// Define foo that takes another function as a parameter
function foo(myFunction) {
    myFunction("I am haunted by the nightmares");
}

// Define myFunc that prints its argument to the console
function myFunc(arg) {
    console.log(arg);
}

// Call foo and pass myFunc as an argument
foo(myFunc); // this should output "I am haunted by the nightmares" to the console