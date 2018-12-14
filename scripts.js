	'use strict';
	const app = document.getElementById("root");
	
	const tesla = document.createElement("img");
	tesla.src = "CMAS_tesla.jpg";
	
	const container = document.createElement("div");
	container.setAttribute("class", "container");
	
	app.appendChild(tesla);
	app.appendChild(container);
	
	var request = new XMLHttpRequest();
        request.open("GET", "https://www.themuse.com/api/public/jobs?category=Creative%20%26%20Design&category=Data%20Science&category=Engineering&category=Project%20%26%20Product%20Management&category=Social%20Media%20%26%20Community&page=1", true);
	//request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=14d276f4fe655e659ec92149c7cebbec", true);
	
	request.onload = function () {    
	  
	  // Begin accessing JSON data here
	  
	var data = JSON.parse(this.response);
	  if (request.status >= 200 && request.status < 400) {
	    data.results.forEach(results => {
	      const card = document.createElement("div");
	      card.setAttribute("class", "card");
	      const h1 = document.createElement("h1");
	      h1.textContent = page.results;
	
	      const list = document.createElement("p");
	      page.results = page.results.substring(0, 300);
	      list.textContent = `${page.results}...`;
		    
	     // const main = document.createElement("p");
	      //weather.main = weather.main.substring(0, 300);
	      //main.textContent = `${weather.main}...`;
		    
	     // const temp = document.createElement("p");
	     // temp.textContent = `${data.main.temp}...`;
		    
	    //  const temp = document.createElement("p");
          //weather.main.temp = weather.main.temp;
          //temp.textContent = `${data.main.temp}...`;	    
	
	      container.appendChild(card);
	      card.appendChild(list);
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

