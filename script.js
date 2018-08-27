// github user finder example

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


    // select the element, adds the information to the selected HTML element
    document.querySelector(".information").innerHTML = user.login + " is github user " + user.id;

    //create a new variable to select the p with a class of link

    var profileLink = document.querySelector(".link");
    profileLink.innerHTML = `This is a link to their <a href=${user.html_url}>profile </a>`

    var profilePicture = document.querySelector(".picture");
    profilePicture.innerHTML = `<img src=${user.avatar_url}>`



  } else {
    if(xmlhttp.status !== 200)
    // select the element
  document.querySelector(".information").innerHTML = "This user doesn't exist"

  }
}
