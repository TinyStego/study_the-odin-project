const container = document.querySelector("#container");
const content = document.createElement("div");
const redPara = document.createElement("p");
const blueHeadline = document.createElement("h3");
const pinkDiv = document.createElement("div");
const divHeadline = document.createElement("h1");
const divPara = document.createElement("p");

content.classList.add("content");
content.textContent = "This is the text-content";

redPara.style.color = "red";
redPara.textContent = "Hey I'm red!";

blueHeadline.style.color = "blue";
blueHeadline.textContent = "I'm a blue h3!";

pinkDiv.style.cssText = "border: 2px solid black; background-color: pink";
divHeadline.textContent = "I'm in a div";
divPara.textContent = "ME TOO!";

container.appendChild(content);
pinkDiv.appendChild(divHeadline);
pinkDiv.appendChild(divPara);
container.appendChild(pinkDiv);

