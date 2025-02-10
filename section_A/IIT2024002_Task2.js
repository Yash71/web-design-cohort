let btn=document.getElementById("btn");
let h1=document.getElementsByTagName("h1");
let box=document.getElementsByClassName("box");
let item=document.querySelector(".item");

let dark=true;
btn.style.marginTop="8px";
btn.addEventListener("click",()=>{
    alert("you clicked me!")
    if(box[0]){
        box[0].style.backgroundColor = "pink";    
    }
});

h1[0].style.fontStyle="bold";

box[0].style.border="1px solid black";
box[0].style.padding="10px";

item.style.fontStyle="italic";
