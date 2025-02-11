

d = (b,c) => b+c;
   console.log(d(10,35)); 

   

   //  function printf(a) {
   //   return "Hello World!";
   // }
   // console.log(printf(1));

  printf = () => "Hello World!";
  console.log(printf());


// task
// 1. study about arroow functions 
// 2.study different inbuilt functions of js like
// querySelector,getElementByID,getElementByclassNAme
// implement every function and make a website 



  const changeTitle = () => {
    document.getElementById("title").textContent = "Milan Chopda";
};

const changeTextColor = () => {
    document.querySelector("p").style.color = "blue";
};

const changeBoxColors = () => {
    let boxes = document.getElementsByClassName("b1");
    for (let p of boxes) {
        p.style.backgroundColor = "lightblue";
    }
};

const changeContent = () => {
    changeTitle();
    changeTextColor();
    changeBoxColors();
};
