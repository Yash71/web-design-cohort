document.getElementById("button").addEventListener("click", () => {
  let title = document.getElementById("title");
  title.innerHTML = "Lorem ipsum dolor sit amet consectetur.";
  title.style.color = "red";

  let data = document.getElementsByClassName("data")[0];
  data.innerHTML = " Lorem ipsum dolor sit amet consectetur.";
  data.style.color = "green";

  let paragraph = document.getElementsByTagName("p")[0];
  paragraph.innerHTML = "Lorem ipsum dolor sit amet consectetur.";
  paragraph.style.backgroundColor = "blue";
  document.querySelector(".message").innerHTML = "Lorem ipsum dolor sit amet consectetur.";
  document.querySelectorAll(".information")[0].innerHTML = "Lorem ipsum dolor sit amet consectetur.";
});

