let heading=document.getElementById('tittle');
heading.style.backgroundColor='green';
//innerHTML textContent innerText
//IN innerText when you write a class  in a paragraph than it will not show that class content 
//in textContent it will show all text
//IN innerHTML it will give all details like class name etc means complete details like span> than class than its content
let heading2=document.getElementsByClassName('heading')
heading.style.backgroundColor='red';
let h2=document.querySelectorAll('h2');
h2[0].style.backgroundColor='purple'
let list=document.querySelectorAll('li');
// list[0].style.color='green';
list.forEach((l)=>{
    l.style.background='yellow'
})