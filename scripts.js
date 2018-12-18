	'use strict';
	const app = document.getElementById("root");
	
	const container = document.createElement("div");
	container.setAttribute("class", "container");

	// create a request variable and assign a new HMLHttpRequest object to it	
	var request = new XMLHttpRequest();

	// open a new connection, using the GET request on the URL endpoint
        request.open('GET', 'https://jobs.github.com/positions.json?description=analyst&location=raleigh&page=1', true);
       
	request.onload = function () {    
	    // Begin accessing JSON data here
	var data = JSON.parse(this.response);
	
	data.forEach(job => {
	// log each job title
	console.log(job.title);
	});
	// send request
	request.send();
	/*  
	var data = JSON.parse(this.response);
	  if (request.status >= 200 && request.status < 400) {
	    data.forEach(title => {
	      const card = document.createElement("div");
	      card.setAttribute("class", "card");
	      const h1 = document.createElement("h1");
	      h1.textContent = title;
	
	      const company = document.createElement("p");
	      company = company.substring(0, 300);
	      company.textContent = `${data.company}...`;
		    
	      container.appendChild(card);
	      card.appendChild(title);
	   
	    });
	  } else {
	    const errorMessage = document.createElement("marquee");
	    errorMessage.textContent = `Hug it, it's not working!`;
	    app.appendChild(errorMessage);
	  }
	}

	request.send();
	*/

