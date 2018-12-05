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
request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=3190b3e074868b6189a94a8795afa8a2", true);
request.onload = function () {

  // Begin accessing JSON data here
   'use strict';
 //var data = JSON.parse(this.response);
  console.log(data);
  if (request.status >= 200 && request.status < 400) {
    data.weather.forEach(job => {
      const card = document.createElement("div");
      card.setAttribute("class", "card");
      const h1 = document.createElement("h1");
      h1.textContent = job.title;

      const p = document.createElement("p");
      job.description =JSON.parse(job.description).substring(0,300); 
      p.textContent = `${job.description}...`;

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
