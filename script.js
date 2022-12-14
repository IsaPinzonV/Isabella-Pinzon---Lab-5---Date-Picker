const date_picker_element = document.querySelector(".date-picker");
const selected_date_element = document.querySelector(
  ".date-picker .selected-date"
);
const dates_element = document.querySelector(".date-picker .dates");
const mth_element = document.querySelector(".date picker .dates .month .mth");
const next_mth_element = document.querySelector(
  ".date picker .dates .month .next-mth"
);
const prev_mth_element = document.querySelector(
  ".date picker .dates .month .prev-mth"
);
const days_element = document.querySelector(".date picker .dates .days");

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "Jun",
  "July",
  "Auguts",
  "September",
  "October",
  "November",
  "December",
];

let date = new Date();
let day = date.getDate();
let month = date.getMonth();
let year = date.getFullYear();

let selectedDate = date;
let selectedDay = day;
let selectedMonth = month;
let selectedYear = year;

console.log(months[month] + " " + year);
//mth_element.textContent = months[month] + "" + year;

date_picker_element.addEventListener("click", toggleDatePicker);

function toggleDatePicker(e) {
  console.log(e.path);

  if (!checkEventPathForClass(e.path, "dates")) {
    dates_element.classList.toggle("active");
  }
}

function checkEventPathForClass(path, selector) {
  for (let i = 0; i < path.length; i++) {
    if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
    }
  }

  return false;
}
