console.log(
  "The minimum value in the given list of arguments is: ",
  Math.min(0, 150, 30, 20, -8, -200)
);

let arr = [34, 56, 22, 11, 35, 87];
arr.sort((a, b) => a - b);
console.log("Min value in the array: ", arr);
//
let x = Math.floor(Math.random() * 10);
console.log("Random value between 0 to 9 is: ", x);

// random values of an array
const points = [40, 100, 1, 5, 25, 10];
console.log("Original array: ", points); 

points.sort(function(){return 0.5-Math.random()});
console.log("\n\nRandom array: ", points); 

