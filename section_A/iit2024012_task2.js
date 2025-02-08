function ans(container) {
    return function() {
        const user_input = String(container.value);
        const result = document.querySelector(".result");
        result.innerHTML = `
        <h2 style="color: green">${user_input}</h2>
        `;
    };
}
for (let i = 0; i < 3; i++) {
    let container;
    if (i === 0) {
        container = document.querySelector(".query");
    } else if (i === 1) {
        container = document.getElementById('byid');
    } else {
        container = document.getElementsByClassName("byclass")[0];
    }
    if (container) {
        const submission = document.getElementsByClassName("submit")[i];
        submission.addEventListener('click', ans(container));
    }
}

// below is the html 

/* <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1,h2{
            text-align: center;
        }
        .cont{
            display: flex;
            justify-content: space-evenly;
            gap: 20px;
        }
        .sub{
            margin-top: 20px;
            display: flex;
            justify-content: space-evenly;
            gap: 20px;
        }
    </style>
</head>
<body>
    <h1>This is Interactive site to study <span style="color: red;">querySelector </span>, <span style="color: red;">getElementById </span>, <span style="color: red;">getElementsByClassName </span></h1>
    <div class="cont">
        <input class="query" type="text" placeholder="querySelector...">
        <input id="byid" type="text" placeholder="getElementById...">
        <input class="byclass" type="text" placeholder="getElementsByClassName...">
    </div>
    <div class="sub">
        <input type="submit" value="Submit" class="submit">
        <input type="submit" value="Submit" class="submit">
        <input type="submit" value="Submit" class="submit"> 
    </div>
    <div class="result">

    </div>
    <script src="iit2024012_2.js"></script>
</body>
</html>
*/
