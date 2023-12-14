const checkboxes = document.querySelectorAll("#Checkboxes");

checkboxes.forEach((checkboxes) => {
  checkboxes.addEventListener("change", () => {
    const checkedCount = document.querySelectorAll(
      "#Checkboxes:checked"
    ).length;

    if (checkedCount > 2) {
      checkboxes.checked = false;
    }
  });
});
