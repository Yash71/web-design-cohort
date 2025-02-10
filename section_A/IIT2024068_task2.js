const btn=document.getElementById("btn");
const h1=document.getElementsByTagName("h1");
const box=document.getElementsByClassName("box");
const item=document.querySelector(".item");

let dark=true;
btn.style.marginTop="8px";
btn.addEventListener("click",()=>{
    alert("you clicked me!")
});

h1[0].style.fontStyle="bold";

box[0].style.border="4px solid black";

item.style.fontStyle="italic";



