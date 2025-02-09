function change_by_id() {
    document.getElementById("id").innerHTML="Yash Mishra Is A Good Teacher";
}

function change_by_class() {
    document.getElementsByClassName("class")[0].innerHTML="Yash Mishra Is A Good Teacher";
}

function change_by_query_selector(){
    document.querySelector("#id").innerHTML="Yash Mishra Is A Good Teacher";
    // in case of class we will use .class
}

// // const function_name = (parameters)=>{
//     operation
// }

const addition = (a,b)=>{
    console.log(a+b);
}

addition(1,2);
