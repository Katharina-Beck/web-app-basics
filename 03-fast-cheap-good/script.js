const checkboxes = document.querySelectorAll("input[type=checkbox]");
let lastCheckbox;

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => {
    let checkedCount = 0;
    checkboxes.forEach((checkbox) => {
      if (checkbox.checked) checkedCount++;
    });

    if (checkedCount > 2) lastCheckbox.checked = false;

    lastCheckbox = checkbox;
  });
});
