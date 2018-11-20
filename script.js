const app = document.getElementById('root');
/*
const logo = document.createElement('img');
logo.src = 'logo.png';*/

const container = document.createElement('div');
container.setAttribute('class', 'container');

//app.appendChild(logo);//
app.appendChild(container);

var request = new XMLHttpRequest();
request.open('GET', 'https://www.themuse.com/api/public/jobs?page=1&category=Account%20Management&category=Creative%20%26%20Design&category=Data%20Science&category=Engineering&category=Marketing%20%26%20PR&category=Project%20%26%20Product%20Management', true);
request.onload = function () {

  // Begin accessing JSON data here
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
    // changed data.forEach to data.results.forEach to solve an Uncaught error //
    data.results.forEach(job => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');

      const h1 = document.createElement('h1');
      h1.textContent = job.title;

      const p = document.createElement('p');
      // original code:  job.description = job.description.substring(0, 300);//
      job.description = JSON.stringify(job.description).substring(0, 300);
      p.textContent = `${job.description}...`;

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
