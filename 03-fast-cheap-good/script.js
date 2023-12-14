const checkboxes = document.querySelectorAll("#Checkbox");

checkboxes.forEach((checkboxes) => {
  checkboxes.addEventListener("change", () => {
    const checkedCount = document.querySelectorAll("#Checkbox:checked").length;

    if (checkedCount > 2) {
      checkedbox.checked = false;
    }
  });
});
