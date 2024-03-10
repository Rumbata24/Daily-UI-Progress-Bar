const progressBar = document.querySelector(".progress-bar");
const bar = document.querySelector(".bar");
const checkboxesForm = document.querySelector("#checkboxes-form");
let remaining = document.querySelector(".remaining");
let checks = document.querySelectorAll("input[type='checkbox']");

const update = () => {
  let checked = 0;

  // Reference all checkboxes in the form
  let boxes = checkboxesForm.querySelectorAll("input[type='checkbox']:checked");
  checked = boxes.length;

  bar.style.width = (checked / 7) * 100 + "%";

  if (checked == 0) {
    alert("Please select CheckBoxe(s).");
  }
  remaining.innerText = `${7 - boxes.length} remaining to complete`;

  if (7 - boxes.length === 0) {
    remaining.innerText = `All completed.`;
  }

  if (boxes.length === 7) {
    remaining.innerText = `You haven't completed any actions yet.`;
  }
};

checks.forEach(function (box) {
  box.addEventListener("change", function (e) {
    update();
  });
});
