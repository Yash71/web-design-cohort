const multiply=(x,y) => console.log(x&y); 
let x=2,y=5;
multiply(x,y);

function byid() {
    document.getElementById("id_name").innerText="print";
}

function byclass() {
    document.getElementsByClassName("class_name").innerText="print in class";
}

let link=document.querySelector('a');
link.textContent="click here to open";
