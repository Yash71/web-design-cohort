window.onload = function () {
    const a = document.getElementById("title");
    a.style.width = "300px";
    a.style.height = "200px";
    a.style.backgroundColor = "blue";
    a.style.border = "3px solid gray";
    a.style.textAlign = "right";
    a.style.lineHeight = "200px";
    a.innerText = "Hello World!";

    const b = document.getElementsByTagName("span");
    for (let i = 0; i < b.length; i++) {
        b[i].innerHTML = 'Updated Text ' + (i + 1);
        b[i].style.color = "orange";
        b[i].style.fontSize = "20px";
    }

    const c = document.getElementsByClassName("title1");
    for (let i = 0; i < c.length; i++) {
        c[i].style.height = "250px";
        c[i].style.width = "250px";
        c[i].style.backgroundColor = "pink";
        c[i].style.borderRadius = "15px";
    }

    
    a.addEventListener("dblclick", function () {
        a.style.backgroundColor = a.style.backgroundColor === "blue" ? "red" : "blue";
    });
};
