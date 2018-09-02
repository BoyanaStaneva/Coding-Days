// github user finder example

var createDate = new Date();
/*var curr_date = createDate.getDate();
var curr_month = createDate.getMonth() + 1; //Months are zero based
var curr_year = createDate.getFullYear();
var today = (curr_year + "-" + curr_month + "-" + curr_date); */
console.log(createDate);



document.getElementById('searchIcon').onclick = function() {
    let getUsername = document.getElementById('username').value
    getGithubInfo(getUsername);
}

document.onkeypress = function(){
if (event.which === 13) {
  let getUsername = document.getElementById('username').value
  getGithubInfo(getUsername);
}};

function getGithubInfo(username) {
  var url = 'https://api.github.com/users/' + username;

  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open('GET', url, false);
  xmlhttp.send();
  // creeates a variable to hold the data passed by the function which converts the JSON into a JS object
  var createObject = showUser(xmlhttp);
  //returns the results
  return createObject;
}

function showUser(xmlhttp) {
  if(xmlhttp.status === 200) {
    // show the user details
    var json = xmlhttp.responseText;
    // creates object with user details
    var user = JSON.parse(json);
    console.log(user)

    var signUpDate = new Date(user.created_at);
    console.log(signUpDate);

    let difference = 0;
    let days = 1000 * 60 * 60 *24;

    difference = createDate - signUpDate;
    document.querySelector(".days").innerHTML =

    user.login + " has been coding for " + Math.floor(difference / days) + " days. " + "That is " + Math.floor(Math.floor(difference / days) / 365) + " years";



  } else {
    if(xmlhttp.status !== 200)
    // select the element
  document.querySelector(".days").innerHTML = "This user doesn't exist"

  }
}
