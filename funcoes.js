//Existem diferentes maneiras de declarar uma função

//Function declaration
function sum(a, b) {
    return a + b;
}

sum(1, 3) // 4

// Function expression
const count = function (array) {
    return array.length;
}

count([5, 7, 8]) // 3

// Arrow function
const absValue = (number) => {
    if (number < 0) {
        return -number;
    }
    return number;
}

absValue(-10); // 10