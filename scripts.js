	'use strict';
	const app = document.getElementById("root");
	
	const container = document.createElement("div");
	container.setAttribute("class", "container");
		
	var request = new XMLHttpRequest();
        request.open("GET", "https://jobs.github.com/positions.json?description=analyst&location=raleigh&page=1", true);
       
	request.onload = function () {    
	  
	  // Begin accessing JSON data here
	  
	var data = JSON.parse(this.response);
	  if (request.status >= 200 && request.status < 400) {
	    data.forEach(title => {
	      const card = document.createElement("div");
	      card.setAttribute("class", "card");
	      const h1 = document.createElement("h1");
	      h1.textContent = title;
	
	      const title = document.createElement("p");
	      title = title.substring(0, 300);
	      title.textContent = `${data.title}...`;
		    
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

