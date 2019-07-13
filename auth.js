//Reference to authorisation
var auth = firebase.auth();

//Reference to page title
var hello = document.getElementById("hello");

//Create user
function signUp(email, pass) {}

// Login
function signIn(email, pass) {}

//Logout
function signOut() {}

//Check if the user is logged in
function isLoggedIn() {}

function getUserData() {}

//Reaction to authorisation changes
auth.onAuthStateChanged(function(user) {});

// *************** Form support

//Reference to form elements
var form = document.getElementById("form");
var submitButton = document.getElementById("submit-btn");
var signOutButton = document.getElementById("signout");
var textInput = document.getElementById("text-input");
var passInput = document.getElementById("pass-input");
