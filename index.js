// Selecting HTML elements with Javascript
document.getElementsByClassName("list")[2].style.color = "red";
document.getElementsByTagName("h1")[0].innerHTML = "Good Bye";
document.getElementById("btn").style.fontSize = "1rem";
document.querySelector(".heading").style.fontSize = "5rem";


// Changing style of HTML with Javascript
document.querySelector("button").classList.add("change");

// Text manipulation and text content
document.querySelector("h1").textContent = "Hy there!";
document.querySelector("h1").textContent = "Hello there!";

// document.querySelector("a").attributes; Gives attributes of a i.e href
// document.querySelector("a").getAttribute("href"); It will give https://www.google.com
document.querySelector("a").setAttribute("href", "https://www.bing.com/");