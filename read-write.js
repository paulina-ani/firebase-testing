// Table element in DOM
var tableBody = document.querySelector("#table tbody");

// Clear data table
function clearTable() {
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }
}

// Read data from firebase
function getPeople() {
  firebase
    .database()
    .ref("people")
    .once("value")
    .then(function(snapshot) {
      var people = snapshot.val();
      console.log(people);

      var arrayPeople = Object.keys(people).map(function(key) {
        return {
          id: key,
          ...people[key]
        };
      });
      console.log(arrayPeople);
      clearTable();

      arrayPeople.forEach(function(person) {
        var row = document.createElement("tr");

        var nameCol = document.createElement("td");
        var surnameCol = document.createElement("td");
        var ageCol = document.createElement("td");
        nameCol.innerText = person.name;
        surnameCol.innerText = person.surname;
        ageCol.innerText = person.age;
        row.appendChild(nameCol);
        row.appendChild(surnameCol);
        row.appendChild(ageCol);
        tableBody.appendChild(row);
      });
    });
}

// Add data to firebase
function addPerson(name, surname, age) {
  var personId = firebase
    .database()
    .ref("people")
    .push().key;
  console.log(personId);

  firebase
    .database()
    .ref("people/" + personId)
    .set({
      name: name,
      surname: surname,
      age: age
    })
    .then(function() {
      alert("Dodano pomyślnie");
      getPeople();
    })
    .catch(function(error) {
      alert("Error " + error.message);
    });
}

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
