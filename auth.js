//Reference to page title
var hello = document.getElementById("hello");

//Create user
function signUp(email, pass) {
  firebase
    .auth()
    .createUserWithPassword(email, pass)
    .then(function() {
      alert("Zarejestrowano pomyślnie");
    })
    .catch(function(e) {
      alert("Error: " + e.message);
    });
}

// Login
function signIn(email, pass) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, pass)
    .then(function() {
      alert("Zalogowano pomyslnie");
    })
    .catch(function(error) {
      alert("Error" + error.message);
    });
}

//Logout
function signOut() {
  firebase
    .auth()
    .signOut()
    .then(function() {
      alert("Wylogowano pomyślnie");
    })
    .catch(function(error) {
      alert("Error " + error.message);
    });
}

//Check if the user is logged in
function isLoggedIn() {
  return !!firebase.auth().currentUser;
}

function getUserData() {
  return firebase.auth().currentUser;
}

//Reaction to authorisation changes
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    hello.innerText = "Hello " + user.email;
  } else {
    hello.innerText = "Zaloguj się";
  }
});

// *************** Form support

//Reference to form elements
var form = document.getElementById("form");
var submitButton = document.getElementById("submit-btn");
var signOutButton = document.getElementById("signout");
var textInput = document.getElementById("text-input");
var passInput = document.getElementById("pass-input");

submitButton.addEventListener("click", function(event) {
  event.preventDefault(); //zabobieganie wykonania domyślnej akcji
  signIn(textInput.value, passInput.value);
});

signOutButton.addEventListener("click", function() {
  signOut();
});
