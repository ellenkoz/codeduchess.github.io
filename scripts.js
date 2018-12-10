// create a request variable and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//open a new connection, using the GET request on the URL endpoint
request.open('GET', "https://api.openweathermap.org/data/2.5/weather?q=London&APPID=14d276f4fe655e659ec92149c7cebbec", true); 

request.onload = function () {
  //begin accessing JSON data here
 }
}
//send request
request.send();
