// Whole-script strict mode syntax
'use strict';
const app = document.getElementById("root");

const logo = document.createElement("img");
logo.src = "logo.png";

const container = document.createElement("div");
container.setAttribute("class", "container");

app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
request.open("GET", "https://https://www.themuse.com/api/public/jobs?category=Creative%20%26%20Design&category=Data%20Science&category=Engineering&category=Project%20%26%20Product%20Management&page=1", true);
request.onload = function () {

  // Begin accessing JSON data here
   'use strict';
var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.weather.forEach(weather => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      const h1 = document.createElement("h1");
      h1.textContent = weather.title;

      const p = document.createElement("p");
      weather.description = weather.description.substring(0, 300);
      p.textContent = `${weather.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement("marquee");
    errorMessage.textContent = `Hug it, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
