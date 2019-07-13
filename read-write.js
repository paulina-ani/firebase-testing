// Table element in DOM
var tableBody = document.querySelector("#table tbody");

// Reference to firebase
var database = firebase.database();

// Clear data table
function clearTable() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

// Read data from firebase
function getPeople() {}

// Add data to firebase
function addPerson(name, surname, age) {}

// Edit data
function editPerson(personId, name, surname, age) {}

// Delete data
function removePerson(personId) {}

// *************** Buttons support

var submitAddPersonButton = document.getElementById("add-person-submit-btn");
var editAddPersonButton = document.getElementById("edit-person-submit-btn");
var nameInput = document.getElementById("name-input");
var surnameInput = document.getElementById("surname-input");
var ageInput = document.getElementById("age-input");
