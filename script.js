//Create a request varibale and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://www.themuse.com/api/public/jobs?page=1', true);
             
request.onload = function () {
 // begin accessing JSON data here 
 }
}

// send request
request.send();
