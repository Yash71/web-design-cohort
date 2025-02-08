document.querySelector("button").addEventListener("click", () => {
    const divElement = document.querySelector("div");
    divElement.innerHTML = "This is a 'div' element filled using JavaScript.";
    
    const pElement = document.querySelector("p");
    pElement.style.margin = "20px 0";
    pElement.innerHTML = "This is a 'p' element filled using JavaScript.";
    
    const aElement = document.querySelector("a");
    aElement.innerHTML += " This is an 'a' element filled using JavaScript.";
});
