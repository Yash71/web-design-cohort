function byclassname(){
    let input=document.getElementsByClassName("class")[0]
    let data=input.value;
    if(input.value==""){
        alert("enter text first...");
        return;
    }
    console.log(data);
    input.value="";
    let p=document.getElementsByClassName("inputdata")[0]
    p.innerHTML=data;
}
function byid(){
    let input=document.getElementById("id")
    let data=input.value 
    if(input.value==""){
        alert("enter text first...");
        return;
    }
    console.log(data);input.value=""
    let p=document.getElementsByClassName("inputdata")[0]
    p.innerHTML=data;
}
function byQuerySelector(){
    let input=document.querySelector(".class")
    let data=input.value
    if(input.value==""){
        alert("enter text first...");
        return;
    }
    console.log(data);
    input.value=""
    let p=document.getElementsByClassName("inputdata")[0]
    p.innerHTML=data;
}
