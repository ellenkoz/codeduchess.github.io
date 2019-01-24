// strict mode applied to solve "Uncaught syntax error: unexpected token u in JSON @ position 0"
'use strict';
const app = document.getElementById('root');

const container = document.createElement('div');
container.setAttribute('class', 'container');

app.appendChild(container);

// retrieve data with HTTP request
var request = new XMLHttpRequest();
 
// use Heroku as proxy to resolve CORS error & list URL endpoint
request.open('GET', 'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&markdown=true&page=1', true);
request.onload = function () {

  // Begin accessing JSON data here & convert JSON to JavaScript objects via JSON.parse
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    data.forEach(job => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = job.title;
      
      const p = document.createElement('p');
      // use substring on the <p> element to limit the description andkeep each card equal length
      job.description = job.description.substring(0, 300);
      p.textContent = `${job.description}...`;

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });
  } else {
    const errorMessage = document.createElement('marquee');
    errorMessage.textContent = `Hug it, it's not working!`;
    app.appendChild(errorMessage);
  }
}
//should filter go here?
request.send(); 
