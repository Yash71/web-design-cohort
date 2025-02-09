document.querySelector("button").addEventListener("click", () => {
  function updateAnchor() {
    const anchor = document.querySelector("a");
    anchor.innerHTML = " Lorem ipsum dolor sit amet consectetur.";
    anchor.style.color = "blue";
    anchor.style.textDecoration = "underline";
  }
  function updateParagraph() {
    const paragraph = document.querySelector("p");
    paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur.";
    paragraph.style.color = "green";
  }
  function updateDiv() {
    const div = document.querySelector("div");
    div.innerHTML = "Lorem ipsum dolor sit amet consectetur.";
    div.style.border = "2px solid black";
  }
  function updateHeading() {
    const heading = document.querySelector("h1");
    heading.innerHTML = "Lorem ipsum dolor sit amet consectetur.";
    heading.style.color = "black";
  }
});
