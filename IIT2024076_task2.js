let para = document.getElementsByClassName("P");
if (para) para[0].textContent = "This is the first element which has class 'P'";

let id1 = document.getElementById("p1");
if (id1) id1.textContent = "This element has id 'p1'";

let par = document.querySelector("p");
if (par) par.textContent = "This is a paragraph";

function hi() {
    alert("hello");
}