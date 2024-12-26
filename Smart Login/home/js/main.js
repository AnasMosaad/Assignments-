let userName = localStorage.getItem("userName");
let logBtn = document.getElementById("logBtn");

userNameWrapper.innerHtml = userName;

logBtn.addEventListener("click", function () {
  localStorage.removeItem('userName')
});
