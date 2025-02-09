//please have basic structure code in html and title tag too thanks


document.querySelector('title').innerHTML="My website using only JavaScript";
document.querySelector("body").innerHTML="<p id='heading'>hello thanks for reading this, this is my submission to task given in the web_js_class by yash_mishsra_sir thanks.</p>"




document.querySelector("body").innerHTML += "<p id='heading2'>for this website i am using my favourite color theme</p>";
document.querySelector("body").innerHTML += "<p class='heading3'>nice to meet you.</p>";

const setAttributes = (name,alignValue,fFamily,size,colour) => {
    const headingThing = document.getElementById(name);
    headingThing.style.textAlign=alignValue;
    headingThing.style.fontFamily=fFamily;
    headingThing.style.fontSize=size;
    headingThing.style.color=colour;
};

const setAttributesButClass = (name,alignValue,fFamily,size,colour) => {
    const headingThing = document.getElementsByClassName(name)[0];
    headingThing.style.textAlign=alignValue;
    headingThing.style.fontFamily=fFamily;
    headingThing.style.fontSize=size;
    headingThing.style.color=colour;
};

setAttributes("heading","center","poppins","26px","#DE4F91");
setAttributes("heading2","center","poppins","20px","#3BB3CF");
setAttributesButClass("heading3","center","poppins","23px","#DE4F91");
