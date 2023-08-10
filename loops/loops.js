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
document.getElementById("demo2").innerHTML = "Today is " + day;

// To display the values using for loop
const cars = ["BMW", "Volvo", "Saab", "Ford"];
let txt = "";
for (let i = 0; i < cars.length; i++) {
  txt += cars[i] + "\n";
}
console.log("Using for loop: ", txt);

// To display the values using While loop
let txt1 = "";
let i = 0;
while (i < cars.length) {
  txt1 += cars[i] + " ";
  i++;
}
console.log("Using while loop: ", txt1);

// Iteration
const web = "W3Schools";
let txt2 = "";
for (const x of web) {
  txt2 += x + " ";
}
console.log("Using for of loop to iterate over an array: ", txt2);
