const toggleButton = document.querySelector("#toggle-button");
const password = document.querySelector("#password");

toggleButton.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (password.type === "password") {
    toggleButton.innerText = "Show Password";
  } else {
    toggleButton.innerText = "Hide Password";
  }
});
