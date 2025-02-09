a=10; //hoisting - initilize before declaration
var a; //declaration (dont use var)
let b; //declaration
const c = 30; //cannot be only declared
b = 20; //initilize
console.log(a); //prints a
console.log(b); //prints b
//temporal dead zone


// function name(params) {   
// }
//create a function to add 3 numbers and print the result
function add(a,b,c){
    console.log(a+b+c);
}
add(2,3,4);


//Study arrow functions
//Study different inbuilt functions of js like queryselector,getelementbyID,getelementbyClassname.
//Impliment all these to make website.
let button = document.querySelector("button")
button.textContent = "Button"
let p = document.getElementsByClassName("pa")
p[0].textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex labore iusto optio reprehenderit quis minima rerum. Maxime exercitationem hic nam voluptatem!"
let div = document.getElementById("q")
div.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, vero."
