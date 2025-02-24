var mystring = "5";

var myNumber = 5;

console.log("--------------------------starting here-----------------------")

console.log(mystring == myNumber);
console.log(mystring === myNumber);

console.log("----------------------- be careful with string concatenations --------------------------");

console.log("These are the same with ==: " + mystring == myNumber);
console.log("These are the same with === (that looks at type): " + mystring === myNumber);


console.log("----------------------- be careful with string concatenations --------------------------");

var myArr = [1, 2, 3];

var [a, b ,c] = myArr;

console.log(b); //we expect it to print out the value 2 here.. //Morten
