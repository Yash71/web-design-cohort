const btn=document.getElementById("btn");
const h1=document.getElementsByTagName("h1");
const box=document.getElementsByClassName("box");
const item=document.querySelector(".item");

let dark=true;
btn.style.marginTop="8px";
btn.addEventListener("click",()=>{
    if(dark){
        dark=false;
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }else{
        dark=true;
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    }
});

h1[0].style.fontStyle="italic";

box[0].style.border="4px solid gray";

item.style.fontStyle="italic";



