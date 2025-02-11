const displayOutput = (message) => 
    {
        document.querySelector('.output').innerText = message;
    };
    
    
    const handleById = () => 
        {
        const input = document.getElementById('inputById').value;
        if (input === "") 
        {
            alert("Please enter text first!");
            return;
        }
        console.log(input);
        displayOutput(`Input by ID: ${input}`);
        document.getElementById('inputById').value = "";
    };
    
    
    const handleByClassName = () => 
        {
        const input = document.getElementsByClassName('inputByClass')[0].value;
        if (input === "") 
        {
            alert("Please enter text first!");
            return;
        }
        console.log(input);
        displayOutput(`Input by Class Name: ${input}`);
        document.getElementsByClassName('inputByClass')[0].value = "";
    };
    
    const handleByQuerySelector = () => 
        {
        const input = document.querySelector('.inputByQuery').value;
        if (input === "") 
        {
            alert("Please enter text first!");
            return;
        }
        console.log(input);
        displayOutput(`Input by Query Selector: ${input}`);
        document.querySelector('.inputByQuery').value = "";
    };