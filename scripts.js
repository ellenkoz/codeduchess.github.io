	'use strict';
	const app = document.getElementById("root");
	
	//const tesla = document.createElement("img");
	//tesla.src = "CMAS_Tesla.jpg";
	
	const container = document.createElement("div");
	container.setAttribute("class", "container");
	
	//app.appendChild(tesla);
	//app.appendChild(container);
	
	var request = new XMLHttpRequest();
        request.open("GET", "https://jobs.github.com/positions.json?description=ruby&page=1", true);
       
	request.onload = function () {    
	  
	  // Begin accessing JSON data here
	  
	var data = JSON.parse(this.response);
	  if (request.status >= 200 && request.status < 400) {
	    data.results.forEach(results => {
	      const card = document.createElement("div");
	      card.setAttribute("class", "card");
	      const h1 = document.createElement("h1");
	      h1.textContent = results;
	
	      const jobDesc = document.createElement("p");
	      description = description.substring(0, 300);
	      jobDesc.textContent = `${description}...`;
		    
	     // const main = document.createElement("p");
	      //weather.main = weather.main.substring(0, 300);
	      //main.textContent = `${weather.main}...`;
		    
	     // const temp = document.createElement("p");
	     // temp.textContent = `${data.main.temp}...`;
		    
	    //  const temp = document.createElement("p");
          //weather.main.temp = weather.main.temp;
          //temp.textContent = `${data.main.temp}...`;	    
	
	      container.appendChild(card);
	      card.appendChild(jobDesc);
	      //card.appendChild(describe);
	      //card.appendChild(temp);
	    });
	  } else {
	    const errorMessage = document.createElement("marquee");
	    errorMessage.textContent = `Hug it, it's not working!`;
	    app.appendChild(errorMessage);
	  }
	}

	request.send();

