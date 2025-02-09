window.onload = function () {
   
    const h1 = document.createElement("h1");
    h1.innerText = "Welcome to My WebApp";
    h1.style.color = "darkblue";
    h1.style.textAlign = "center";
    document.body.appendChild(h1);

    const para = document.createElement("p");
    para.innerText = "This is a dynamically generated paragraph.";
    para.style.fontSize = "18px";
    para.style.color = "gray";
    para.style.textAlign = "center";
    document.body.appendChild(para);

   
    const anchor = document.createElement("a");
    anchor.innerText = "HELLO_WORLD";
    anchor.href = "https://www.google.com";
    anchor.style.display = "block";
    anchor.style.textAlign = "center";
    anchor.style.marginTop = "10px";
    anchor.style.fontSize = "18px";
    document.body.appendChild(anchor);
};
