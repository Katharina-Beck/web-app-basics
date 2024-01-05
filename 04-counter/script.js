const countLabel = document.querySelector("#countLabel");
let counter = 0;

console.log(countLabel);

document.addEventListener(
  "click",
  function (e) {
    count();
  },
  false
);

document.body.onkeyup = function (e) {
  if (e.code == "Space" || e.code == "Enter") {
    count();
  }
};

function count() {
  counter++;
  countLabel.innerText = counter;

  // farbe pro klick auf 1% hochzählen breite in % = counter --> wenn counter über 100 dann
}
