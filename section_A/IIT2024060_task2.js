const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    const name = document.getElementById("name");
    const age = document.getElementsByClassName("number")[0];
    const luck = document.getElementById("hi");
    alert("Name: " + name.value + "\nAge: " + age.value + "\nLucky Number: " + luck.value);
});
