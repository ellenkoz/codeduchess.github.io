'use strict';
const app = document.getElementById('root');

//const logo = document.createElement('img');
//logo.src = 'logo.png';

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);
app.appendChild(container);

var request = new XMLHttpRequest();
 
request.open('GET', 'https://jobs.github.com/positions.json?&location=north+carolina&page=1', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.url.forEach(job => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = job.name;
      
      //testing to get apply info on page
      //const apply = document.createElement('h4');
      //h4.textContent = data.results.refs.landingpage;

      const p = document.createElement('p');
      job.url = job.url.substring(0, 300);
      p.textContent = `${job.contents}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Gah, it's not working!`;
    app.appendChild(errorMessage);
  }
}

request.send();
