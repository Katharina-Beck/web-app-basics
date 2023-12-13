const showButton = document.getElementById("#show-button");
const password = document.getElementById("#password");

showButton.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    showButton.innerText = "Hide Password";
  } else {
    password.type = "password";
    showButton.innerText = "Show Password";
  }
});
