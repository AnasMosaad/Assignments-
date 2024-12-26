let loginForm = document.getElementById("loginForm");
let signEmail = document.getElementById("signEmail");
let signPassword = document.getElementById("signPassword");
let alertLogin = document.getElementById("alertLogin");
let allUsers = [];
if (localStorage.getItem("allUsers") != null) {
  allUsers = JSON.parse(localStorage.getItem("allUsers"));
}

loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  login();
});
function login() {
  let userData = {
    email: signEmail.value,
    password: signPassword.value,
  };
  if (isLoginValid(userData) == true) {
    alertLogin.classList.replace("d-block", "d-none");
    window.location.href = "../../home/index.html";
  } else {
    alertLogin.classList.replace("d-none", "d-block");
  }
}

function isLoginValid(userData) {
  for (let i = 0; i < allUsers.length; i++) {
    if (
      allUsers[i].email.toLowerCase() == userData.email.toLowerCase() &&
      allUsers[i].password == userData.password
    ) {
      localStorage.setItem("username", allUsers[i].name);
      return true;
    }
  }
}
