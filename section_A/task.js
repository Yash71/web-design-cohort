// const x = (x, y) => { return x * y };
const x=(x,y) => x*y;
        console.log(x(5,5));
        

        hello = () => "Hello World!";
        var y=hello();
        console.log(y);

        //get element by classname
        // the following script is for changing the colours of button while clicking
        function yellow() {
            document.getElementsByClassName('yellow')[0].style.backgroundColor = 
            'yellow';
        }
     
        function green() {
            var elements = document.getElementsByClassName('green');
            for(var i = 0; i < elements.length; i++) {
                elements[i].style.backgroundColor = 'green';
            }
        }
        //get element by id
        //the follwoing script is for getting the id name="task" from html with innertext written as "JAVASCRIPT"
        const task = document.getElementById('task');
    console.log(task.innerText);//will get output in console as JAVASCRIPT
    //use of query selector 
    const z=document.querySelector('.task');// will select task named class from html
    console.log(z);//will give output for task named class

    //similarly any selector can be selected using query selector