const btn = document.getElementById("btn");
const h1 = document.getElementsByTagName("h1")[0];
const box = document.getElementsByClassName("box")[0];
let item = document.querySelector(".item");

btn.style.marginTop = "10px";
btn.style.padding = "8px 15px";
btn.style.borderRadius = "5px";

btn.addEventListener("click", () => {
    let userName = prompt("Enter your name:");
    if (userName) {
        alert(`Hello, ${userName}! Welcome to Task-2.`);
    }
});

if (item) {
    item.style.fontStyle = "italic";
}
