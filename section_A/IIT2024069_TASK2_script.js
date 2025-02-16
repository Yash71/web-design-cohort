document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM Loaded");
});

function useGetElementById() {
    let element = document.getElementById("box1");
    if (element) element.classList.toggle("highlight");
}

function useGetElementsByClassName() {
    let elements = document.getElementsByClassName("class-box");
    if (elements.length > 0) {
        for (let el of elements) {
            el.classList.toggle("highlight");
        }
    }
}

function useGetElementsByTagName() {
    let elements = document.getElementsByTagName("div");
    if (elements.length > 0) {
        for (let el of elements) {
            el.classList.toggle("highlight");
        }
    }
}

function useQuerySelector() {
    let element = document.querySelector(".class-box");
    if (element) element.classList.toggle("highlight");
}

function useQuerySelectorAll() {
    let elements = document.querySelectorAll(".box");
    if (elements.length > 0) {
        elements.forEach(el => el.classList.toggle("highlight"));
    }
}
function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function useRandomColor() {
    let elements = document.querySelectorAll(".box");
    elements.forEach(el => {
        el.style.backgroundColor = getRandomColor();
    });
}
