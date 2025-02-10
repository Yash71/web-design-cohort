const yellow = document.getElementById('yellow');
    const red = document.getElementsByClassName('red')[0]; 
    const body = document.querySelector('body');

    yellow.addEventListener('click', function() {
      body.style.backgroundColor = 'yellow';
    });

    red.addEventListener('click', function() {
      body.style.backgroundColor = 'red';
    });