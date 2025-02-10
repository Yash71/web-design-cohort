//adding content to our htmml webpage

let heading = document.querySelector('h1');
heading.textContent ="In this assignment we are learning to add elements .";

let para=document.querySelector('p');
para.textContent = `Some random Paragraph :
The sun dipped below the horizon, casting a golden hue over the quiet town. A gentle breeze rustled the leaves, carrying the distant laughter of children playing in the park. Streetlights flickered to life, illuminating the winding cobblestone paths with a warm glow. In the distance, the aroma of freshly baked bread wafted from a small bakery, mingling with the crisp evening air. As the day slowly faded into night, the world seemed to pause for a moment, wrapped in the tranquility of twilight.`;

let link=document.querySelector('a');
link.textContent ="click to go to google!";
link.setAttribute("href","https://www.google.com/");
