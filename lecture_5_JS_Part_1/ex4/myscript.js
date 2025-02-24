console.log("--------------------------Example 3-----------------------")

class Foo {
    color;

    constructor(color) {
        this.color = color;
    }

    showColor() {
        console.log(this.color);
    }
}

var myFoo = new Foo("blue");

for (let key in myFoo) {
    console.log(key); //this prints out the name of each property so here it prints "color".
}

var myArr = [1, 2, 3, 4, 5];

for (let value of myArr) {  
    console.log(value); //this prints out the value of each element in the array
}

//optional 1
for (let value of myArr) {  
    console.log(typeof value); //prints out "number" type
}

//optional 2
for (let value in myArr) {  
    console.log(typeof value); //prints out "String" type (as its the key not the value)
}