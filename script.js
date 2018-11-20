//Create a request varibale and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

//Open a new connection, using GET request on the URL endpoint
request.open('GET', 'https://www.themuse.com/api/public/jobs?page=1', true);
             
request.onload = function () {
 // begin accessing JSON data here 
 }

// send request
request.send();

//must convert JSOn into JS objects in order to work with it -- will use JSON.parse()
// begin accessing JSON data here
var data = JSON.parse(this.response);

//create a data variable that contains all the JSON as an array using forEach()
data.forEach(job => {
  // log each job title
 console.log(job.title);
});
