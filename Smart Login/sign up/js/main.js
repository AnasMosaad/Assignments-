let registerForm = document.getElementById("registerForm");
let signName = document.getElementById("signName");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");

let nameAlert = document.getElementById("nameAlert");
let emailAlert = document.getElementById("emailAlert");
let passwordAlert = document.getElementById("passwordAlert");
let existAlert = document.getElementById("existAlert");
let successAlert = document.getElementById("successAlert");
let allUsers = [];

if (localStorage.getItem("allUsers") != null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

registerForm.addEventListener("submit", function (e) {
  e.preventDefault();
  if (chackIfAllInputAreValid()) {
    addUser();
  }
});

function addUser() {
  let newUser = {
    name: signName.vlaue,
    email: signEmail.value,
    password: signPassword.vlaue,
  };
  if (isAlreadyExist(newUser) == true) {
    existAlert.classList.replace("d-none", "d-block");
  } else {
    existAlert.classList.replace("d-block", "d-none");
    successAlert.classList.replace("d-none", "d-block");
    window.location.href = "../../login/index.html";
    allUsers.push(newUser);
    localStorage.setItem("allUsers", JSON.stringify(allUsers));
  }
}

function isAlreadyExist(newUser) {
  for (let i = 0; i < allUsers.length; i++) {
    if (allUsers[i].email.toLowerCase() == newUser.email.toLowerCase()) {
      return true;
    }
  }
}

function validationInputs(regex, element, alertMss) {
  let pattern = regex;
  if (pattern.test(element.value)) {
    alertMss.classlist.replace("d-block", "d-none");
    return true;
  } else {
    alertMss.classlist.replace("d-none", "d-block");
    return false;
  }
}

function chackIfAllInputAreValid() {
  if (
    validationInputs(/[^a-zA-Z0-9$_]{2,}$/, signName, nameAlert) == true &&
    validationInputs(
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      signEmail,
      emailAlert
    ) == true &&
    validationInputs(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
      signPassword,
      passwordAlert
    ) == true
  ) {
  } else {
  }
}
