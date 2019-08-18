//Variable with the file
var selectedFile;
var fileInput = document.getElementById("file"); //input

fileInput.addEventListener("change", function(event) {
  selectedFile = event.target.files[0];
});

//Reference to profile image
var avatar = document.getElementById("avatar"); //img
var changeImg = document.getElementById("change-file"); //button
var deleteImg = document.getElementById("delete-avatar"); //button

//Add new image
function uploadFile() {
  var userData = getUserData();
  return firebase
    .storage()
    .ref("avatars/" + userData.uid)
    .put(selectedFile)
    .then(function() {
      alert("Dodano avatar");
    })
    .catch(function(error) {
      alert("Error " + error.message);
    });
}

// Delete the image
function deleteAvatar() {
  var userData = getUserData();
  return firebase
    .storage()
    .ref("avatars/" + userData.uid)
    .delete()
    .then(function() {
      alert("Usunięto pomyślnie");
    });
}

// Download the image
function getAvatar() {
  var userData = getUserData();
  return firebase
    .storage()
    .ref("avatars/" + userData.uid)
    .getDownloadURL()
    .then(function(url) {
      avatar.setAttribute("src", url);
    })
    .catch(avatar.setAttribute("src", "avatar.jpg"));
}

deleteImg.addEventListener("click", function() {
  deleteAvatar().then(function() {
    getAvatar();
  });
});

changeImg.addEventListener("click", function(event) {
  event.preventDefault();

  if (selectedFile) {
    uploadFile().then(function() {
      getAvatar();
      selectedFile = null;
    });
  }
});
