const toggleButton = document.querySelector("#toggle-button");
const password = document.querySelector("#password");

toggleButton.addEventListener("click", function () {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);

  if (password.type === "password") {
    toggleButton.innerText = "Hide Password";
  } else {
    toggleButton.innerText = "Show Password";
  }
});

//es muss sich noch der Text verändern (if Methode anwenden?)
