const btn=document.querySelector("button");
btn.addEventListener("click",()=>{
    const x=document.getElementById("text-input");
    alert("You've entered "+x.value);
});
