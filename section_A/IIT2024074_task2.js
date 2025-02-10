const btn=document.getElementById("btn");
const h1=document.getElementsByTagName("h1");
const box=document.getElementsByClassName("box");
const item=document.querySelector(".item");

let dark=true;
btn.style.marginTop="8px";
btn.addEventListener("click",()=>{
    alert("you clicked me!")
});

box[0].style.border="2px solid brown";
box[0].style.padding = "15px";
box[0].style.marginTop = "10px";
box[0].style.backgroundColor = "#f5f5f5";
box[0].style.borderRadius = "10px";
h1[0].style.fontSize = "28px";
h1[0].style.color = "#1a237e";
h1[0].style.textDecoration = "underline";
