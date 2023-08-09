function myFunction() {
  let voteable;
  let age = Number(document.getElementById("age").value);
  if (isNaN(age)) {
    voteable = "Not a valid number:";
  } else {
    voteable = age < 18 ? "Not Voteable" : "Voteable";
  }
  document.getElementById("demo").innerHTML = voteable;
}

let day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
    case 2:
    day = "Tuesday";
    break;
    case 3:
    day = "Wednesday";
    break;
    case 4:
    day = "Thursday";
    break;
    case 5:
    day = "Friday";
    break;
    case 6:
    day = "Saturday";
    default:
    text = "Looking forward to the Weekend";
}
document.getElementById("demo2").innerHTML="Today is "+ day;
