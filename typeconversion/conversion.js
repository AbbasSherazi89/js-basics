// JavaScript Errors

// try {
//     console.log("Start of the try statement.");
//     varjk;
// }
// catch(err){
//     console.log("The error in the code is: ", err)
// }
// finally{
//     console.log("The finally statement will always run.")
// }

//Example 2 with throw statement

function myFunction() {
  let msg = document.getElementById("demo");
  msg.innerHTML = "";

  let x = document.getElementById("val").value;

  try {
    if (x.trim() == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 10) throw "too low";
    if (x > 20) throw "too high";
  } catch (err) {
    msg.innerHTML = "Value is " + err;
  }
}
