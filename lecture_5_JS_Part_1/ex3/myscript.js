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

var myFoo = new Foo("red");
myFoo.showColor(); // red