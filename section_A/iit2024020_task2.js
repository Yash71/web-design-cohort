
let a=prompt("enter");
let b=prompt("enter 2");
a=Number(a);
b=Number(b);
const add=(a,b)=> a+b;

console.log(add(a,b));



window.onload=function(){
    const x=document.getElementById("name");
    x.style.width="200px";
    x.style.height="150px";
    x.style.backgroundColor="red";

    const y= document.getElementsByTagName("p");
    y[0].innerHTML='hello';
    y[0].style.color="red";

    const z=document.getElementsByClassName("name1");
    z[0].style.height="200px";
    z[0].style.width="200px";
    z[0].style.backgroundColor="blue";
}
