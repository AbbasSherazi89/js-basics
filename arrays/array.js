const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("array").innerHTML = cars;
console.log(cars.toString());
cars[0] = "Opel";
console.log(cars);

// Accessignthe last element of an array
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruit);

let flen = fruits.length;

text = "<ul>";
for (let i = 0; i < flen; i++) {
  text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";
document.getElementById("looping").innerHTML = text;

// Adding an element to an array using push()
fruits.push("Lemon");
document.getElementById("newarr").innerHTML = fruits;

const arr1 = ["abbas", "Ali", "Tariq"];
const arr2 = new Array(30, 8);
console.log(typeof arr1);
console.log(arr2);

const fruitss = ["Banana", "Orange", "Apple", "Mango"];
// fruitss.sort();
fruitss.reverse();
document.getElementById("sort").innerHTML = fruitss;

const alpha = [20, 50, 32, 400, 26, 180];

console.log("Printing array Alphabatically", alpha.sort());
console.log(
  "Printing array numerically",
  alpha.sort((a, b) => a - b)
);

const rndm = alpha.sort(function () {
  return 0.5 - Math.random();
});
console.log("Printing an array randomly", rndm);

const minimum = alpha.sort((a, b) => a - b);
console.log("Min number in an array:", minimum[0]);

const maximum = alpha.sort((a, b) => a - b);
console.log("Max number in an array:", maximum[alpha.length - 1]);

// using math.min and math.max to find maximum number in an array.
console.log("Min val using Math.min.apply function: ", myMin(alpha));

function myMin(arr) {
  return Math.min.apply(null, arr);
}

// using js method to find min or max

let len = alpha.length;
let max = -Infinity;

while (len--) {
  if (alpha[len] > max) {
    max = alpha[len];
  }
  console.log("Max val using simple js method:", max);
}

// object Arrays
const cars2 = [
  { type: "Volvo", year: 2016 },
  { type: "Saab", year: 2001 },
  { type: "BMW", year: 2010 },
];

const sortCar = cars2.sort((a) => a.type);
console.log("Sorted array by comparing the year value:", sortCar);

const numbers = [20, 50, 32, 400, 26, 180];

let txt = "";
numbers.forEach(myFunction);
function myFunction(value) {
  txt += value + " \n ";
}
console.log("Iterating an arrays using forEach method: ", txt);
let txt1 = "";
numbers.map((val) => {
  txt1 += val + " ";
});

console.log("Iterating an arrays using map method: ", txt1);

let flt = numbers.filter((val, index) => {
  return val > 30;
});
console.log(
  "Values greater then 30 should be printed using the filter methods: ",
  flt
);

const num = [45, 4, 9, 16, 25];
let sum = num.reduce(myFunction);

function myFunction(total, value) {
  return total + value;
}
console.log("Sum of the array is: ", sum);

const fruits3 = ["Apple", "Orange", "Apple", "Mango"];
let position = fruits3.indexOf("Apple") + 1;
console.log(
  "The position of the apple using the indexof method is: ",
  position
);

let fnd = num.find((val, index) => {
  return val < 8;
});
console.log(
  "The first value that is less then 8 is using the find function:",
  fnd
);


let vax="Abbas";
let vay=vax;
vay='Ali';
console.warn(vax); // output will be Abbas

// Deep and Shallow copy

// let x = { name: "Abbas" };
// let y = x;
// y.name = "Ali";
// console.log("Value of X: ", x); // output will be Ali

// to solve the above problem we use shallow copy concept
let x ={name:"Abbas"};
// let y=Object.assign({},x); //Method 1 of shallow copy
let y={...x}; //Method 2 of shallow copy
y.name="Ali";
console.log("Shallow copy: ", x); // Abbas

// Deep Copy 
let person={name:"Abbas",
address:{
  city:'Jand',
  street:'23'
}
};

let person2=JSON.parse(JSON.stringify(person));
person2.address.city='Islamabad';
console.log("Deep copy: ",person);


// Destrucuring
let arr=[34,5,22,66,23,78,2]
let [a,b,c, ...rest]=arr;
console.log(a,b,c,rest);


var array1 = [10, 20, 30, 40, 50];
var array2 = [60, 70, 80, 90, 100];
var array3 = [...array1, ...array2];
console.log("Values in array3: ", array3);


// let val1='Abbas good is a good boy';
// let val2=val1.replace('good', 'bad');
// console.log("Using the replace all method: ",val2);
