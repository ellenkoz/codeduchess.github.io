    const app = document.getElementById("root");

    //add API related image
    const weather = document.createElement("img");
    weather.src = "weather.jpg";

    const container = document.createElement("div");
    container.setAttribute("class", "container");

    //method to append the logo image and container div to the app root.
    app.appendChild(weather);
    app.appendChild(container);

    // Create a request variable and assign a new XMLHttpRequest object to 
    var request = new XMLHttpRequest();

    // Open a new connection, using the GET request on the URL endpoint
    request.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=14d276f4fe655e659ec92149c7cebbec", true);

    request.onload = function () {    
    
    // Begin accessing JSON data here

      var data = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        data.weather.forEach(weather => {
          const card = document.createElement("div");
          card.setAttribute("class", "card");
          const h1 = document.createElement("h1");
          h1.textContent = weather;
            
            
       var data2 = JSON.parse(this.response);
      if (request.status >= 200 && request.status < 400) {
        data.main.forEach(main => {
          const card = document.createElement("div");
          card.setAttribute("class", "card");
          const h1 = document.createElement("h1");
          h1.textContent = main;
            
            
          const p = document.createElement("p");
          weather.description = weather.description.substring(0, 300);
          p.textContent = `${weather.description}...`;
          
          const main = document.createElement("p");
          main.temp = main.temp.substring(0, 300);
          h1.textContent = `${main.temp}...`;
            
          
          // Append the cards to the container element
          container.appendChild(card);

          // Each card will contain an h1 and a p    
          card.appendChild(h1);
          card.appendChild(p);
          card.appendChild(main);
        });
      } else {
        const errorMessage = document.createElement("marquee");
        errorMessage.textContent = `Hug it, it's not working!`;
        app.appendChild(errorMessage);
      }
    }
    // send request
    request.send();
