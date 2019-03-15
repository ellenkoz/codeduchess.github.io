
     
      // USED STRICT MODE TO SOLVE: “UNCAUGHT SYNTAX ERROR: UNEXPECTED TOKEN U IN JSON @ POSITION 0”
      'use strict';
       var apiData=""; 
        
       const app = document.getElementById('root');

       const container1 = document.createElement('div');
       container1.setAttribute('class', 'container1');

       app.appendChild(container1);

       var request = new XMLHttpRequest();

       //GET REQUEST WITH USE OF HEROKU AS A PROXY TO SOLVE CORS ERROR
       request.open('GET','https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?&markdown=true&location=united+states&page=1&count=20', 
                   true);
       request.onload = function () {
      
      //CONVERT JSON DATA TO JAVASCRIPT OBJECTS USING JSON.PARSE
      var apiData = JSON.parse(this.response);
                      
      if (request.status >= 200 && request.status < 400) {
      apiData.forEach(job => {
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
    
      const h1 = document.createElement('h1');
      h1.textContent = job.title;

      const p = document.createElement('p');
      job.description = job.description.substring(0, 300);
      p.textContent = `${job.description}...`;

      container1.appendChild(card);
      card.appendChild(h1);
      card.appendChild(p);
    });

      // ERROR HANDLING
       } else {
       const errorMessage = document.createElement('marquee');
       errorMessage.textContent = `It's not working!`;
      app.appendChild(errorMessage);
     }
         
     }
        
     //FILTER JOBS BY JOB TITLE
                
      function myFunction() {
      var y = document.getElementById("userInput").value;
      alert(y);        
        
      }
        
     const jobs="apiData";       
    // whenever a user types a character in the search bar it is a keyup event -- we will listen for those    
    userInput.addEventListener('keyup', function(e){
    // the target is the input field, so we are asking for its value  
	const term = e.target.value.toLowerCase();
      
    // here we access the apiData and target the h1 tag because the job titles are stored there
	//const jobs = apiData.getElementsByTagName('h1');
     
    // now we cycle through the h1 tags to see if the terms from the search are contained in the h1 tag
    // added Array.prototype to solve "jobs.forEach is not a function" error  
	Array.prototype.jobs.map(function(job){
    // not sure if this is correct - should I put the index number in the array where title is located in the JSON?
		const title= job.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			job.style.display = "block";
		}else{
          // hide the job that is not in the selection
			job.style.display= "none";
                  
	     	}
		})
	});   
            request.send();
 
                     
       
