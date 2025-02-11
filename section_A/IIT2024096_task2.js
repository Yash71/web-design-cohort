const body=document.querySelector('body');
const h1=document.getElementsByTagName('h1')[0];

const red=document.getElementById('red');
const green=document.getElementById('green');
const blue=document.getElementById('blue');
const toggle=document.getElementsByClassName('toggle-btn')[0];

const p=document.getElementById('para');

red.addEventListener('click',function(){
    p.style.color='red';
});

green.addEventListener('click',function(){
    p.style.color='green';
});

blue.addEventListener('click',function(){
    p.style.color='blue';
});

toggle.addEventListener('click',function(){
    body.style.backgroundColor='#010101';
    h1.style.color='rgb(159, 123, 194)';
    p.style.color='#f6f2f3'
});
