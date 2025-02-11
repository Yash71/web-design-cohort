let script1 = document.querySelector('h1');
script1.textContent="Hello";

let para = document.querySelector('p');
para.textContent="MY NAME IS HARIN REEFER MY PROFILE";

let a1 = document.querySelector('a');
a1.textContent="www.HARIN.com";

//  var a=20;
//  a=10;
//  console.log(a); //for print in console
//  let b=30;
//  b=20;
//  console.log(b);
//  const a="panse";
//  console.log(a);

// function <function_name> (parameter_list){

// }

function pandeji(){
    console.log("hi im pandeji and my age is");
}
pandeji();

let a=10,b=10,c=10;
sum(a,b,c);
function sum(a,b,c){
    let sum=a+b+c;
    console.log(sum);
}


// task

// 1.study about arrow function
// 2.inbuilt fun of js like querySelector,getElementByid,getelementbyclassname

// implement every function and male a website
const x=(x,y) => x*y;
        console.log(x(5,5));


        hello = () => "Hello World!";
        var y=hello();
        console.log(y);

        //get element by classname
        // the following script is for changing the colours of button while clicking
        function yellow() {
            document.getElementsByClassName('yellow')[0].style.backgroundColor = 
            'yellow';
        }

        function green() {
            var elements = document.getElementsByClassName('green');
            for(var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = 'green';
            }
        }
        //get element by id
        //the follwoing script is for getting the id name="task" from html with innertext written as "JAVASCRIPT"
        const task = document.getElementById('task');
    console.log(task.innerText);//will get output in console as JAVASCRIPT
    //use of query selector 
    const z=document.querySelector('.task');// will select task named class from html
    console.log(z);//will give output for task named class

    //similarly any selector can be selected using query selector
