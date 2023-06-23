document.getElementById("start-date").valueAsDate = new Date();
function listWeeks() {
  var startDate = new Date(document.getElementById("start-date").value);
  var endDate = new Date(document.getElementById("end-date").value);
  var days = (endDate - startDate) / (1000 * 60 * 60 * 24);
  var weeks = [];

  var weekStart = new Date(startDate);
  var weekEnd = new Date(startDate);
  weekEnd.setDate(weekEnd.getDate() + 6);

  while (weekEnd <= endDate) {
    weeks.push(formatDate(weekStart) + " to " + formatDate(weekEnd));

    weekStart.setDate(weekStart.getDate() + 7);
    weekEnd.setDate(weekEnd.getDate() + 7);
  }

  var output = document.getElementById("output");
  output.innerHTML =
    "<strong>Total weeks: " + weeks.length + "</strong>  |||||  ";
  output.innerHTML += "<strong>Total days: " + days + "</strong>  |||||  ";
  output.innerHTML += "<strong>Total Hours: " + days * 14 + "</strong><br><br>";

  weeks.forEach(function (week, index) {
    output.innerHTML += index + 1 + "- " + week + "<br>";
  });
}

function formatDate(date) {
  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  return padZero(day) + " / " + padZero(month) + " / " + year;
}

function padZero(number) {
  return number.toString().padStart(2, "0");
}
