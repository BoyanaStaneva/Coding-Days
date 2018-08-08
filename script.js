// github user finder example

$(document).ready(function() {
  $(document).on('keypress', '#username', function(event) {
    if (event.which === 13) { // check the key was <enter>
      var input = $(this);
      var username = input.val();
      // creates a variable to hold the data passed by the function, which gets the username from the server response
      var serverResponse  = getGithubInfo(username);
      //Console logs the object created in the ShowUser function
    }
  });
});

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

    // select the element, adds the information to the selected HTML element
    document.querySelector(".information").innerHTML = user.login + " is github user " + user.id;


    //rewrite this with inner HTML
    var nodeForLink = document.createElement('a');
    nodeForLink.innerHTML = 'This is the user profile';
    nodeForLink.setAttribute('title', 'Google');
    document.querySelector(".avatar").appendChild(nodeForLink);

  } else {
    if(xmlhttp.status !== 200)
    // select the element
    var nodeForProfile = document.querySelector(".information")
    // creates the text note
    var textNodeForProfile = document.createTextNode("This user doesn't exist")
    // appends the text node
    // rewrite this with innerHTML
    nodeForProfile.appendChild(textNodeForProfile)
  }
}
