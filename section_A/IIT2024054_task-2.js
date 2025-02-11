//Task:
//1. Study about arrow functions
//2. study different inbuilt functions of JS like queryselector,getElementByID,getElementbyClassName
//implement every function and make a website

// Arrow function 
const x = (x, y) => console.log(x * y);
let a = 2, b = 5;
x(a, b);

hello = () => "Hello World!";
var y = hello();
console.log(y);

// Change text content 
const changeText = () => {
    document.getElementById("text").innerText = "Text has been changed!";
};

// Change color
const changeColor = () => {
    document.querySelector("#text").style.color = "red";
};

// Update elements
const updateClassElements = () => {
    let elements = document.getElementsByClassName("message");
    for (let el of elements) {
        el.style.color = "green";
        el.innerText = "Class element updated!";
    }
};

// Change button color 
function yellow() {
    document.getElementsByClassName('yellow')[0].style.backgroundColor = 'yellow';
}

function green() {
    var elements = document.getElementsByClassName('green');
    for(var i = 0; i < elements.length; i++) {
        elements[i].style.backgroundColor = 'green';
    }
}

// Get element by ID 
function byid() {
    document.getElementById("task").innerText = "print";
}

// Get elements by class name
function byclass() {
    let elements = document.getElementsByClassName("message");
    for (let el of elements) {
        el.innerText = "print in class";
    }
}

// Use of querySelector
let link = document.querySelector('a');
link.textContent = "Click here to open";
