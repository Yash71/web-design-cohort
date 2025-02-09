
// getElementById 
const changeText = () => {
    let heading = document.getElementById("main-heading");
    heading.innerHTML = "Text Changed!";
};

// getElementsByClassName 
const changeColor = () => {
    let elements = document.getElementsByClassName("text");
    for (let i = 0; i < elements.length; i++) {
        elements[i].style.color = "blue";
    }
};

// querySelectorAll
const querySelectorAllExample = () => {
    let Para = document.querySelectorAll(".text");
    for(let i=0;i<Para.length;i++){
    Para[i].classList.add("highlight");}
};

// queryselector
const querySelectorExample = ()=> {
    let firstpara= document.querySelector(".text");
    firstpara.classList.add("highlight");
}
