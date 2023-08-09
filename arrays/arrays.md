# Arrays
An array is a special variable, which can hold more than one value:
const cars = ["Saab", "Volvo", "BMW"];

## Note
- const person = ["John", "Doe", 46];
Arrays use numbers to access its "elements". In this example, person[0] returns John:
-const person = {firstName:"John", lastName:"Doe", age:46};
Objects use names to access its "members". In this example, person.firstName returns John:
- You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

## Adding Array Elements
The easiest way to add a new element to an array is using the push() method:

# Methods of arrays
- toString() converts an array to a string of (comma separated) array values.
- The join() method also joins all array elements into a string.
- The pop() method removes the last element from an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.pop();
The pop() method returns the value that was "popped out":
- The push() method adds a new element to an array (at the end):
The push() method returns the new array length:
- The shift() method removes the first array element and "shifts" all other elements to a lower index.
- The shift() method returns the value that was "shifted out":
- The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
- The unshift() method returns the new array length:

# Warning !
Array elements can be deleted using the JavaScript operator delete.
Using delete leaves undefined holes in the array.
Use pop() or shift() instead.

- The concat() method creates a new array by merging (concatenating) existing arrays:
The concat() method does not change the existing arrays. It always returns a new array.
- Flattening an Array
Flattening an array is the process of reducing the dimensionality of an array.
The flat() method creates a new array with sub-array elements concatenated to a specified depth.
- The splice() method can be used to add new items to an array:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
The first parameter (2) defines the position where new elements should be added (spliced in).
The second parameter (0) defines how many elements should be removed.
- The slice() method slices out a piece of an array into a new array.
The slice() method creates a new array.
The slice() method does not remove any elements from the source array.

- The sort() method sorts an array alphabetically:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
- The reverse() method reverses the elements in an array.
You can use it to sort an array in descending order:
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
fruits.reverse();

- Sorting an Array in Random Order
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(){return 0.5 - Math.random()});
- You can use Math.max.apply to find the highest number in an array:
function myArrayMax(arr) {
  return Math.max.apply(null, arr);
}

## Sorting Object Arrays
JavaScript arrays often contain objects:
const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];
Even if objects have properties of different data types, the sort() method can be used to sort the array.

## JavaScript Array Iteration
Array iteration methods operate on every array item.

- The forEach() method calls a function (a callback function) once for each array element.
- The map() method creates a new array by performing a function on each array element.
The map() method does not change the original array.
- The filter() method creates a new array with array elements that pass a test.
- The reduce() method runs a function on each array element to produce (reduce it to) a single value.
The reduce() method works from left-to-right in the array.
The reduce() method does not reduce the original array.
- The reduceRight() method runs a function on each array element to produce (reduce it to) a single value.
The reduceRight() works from right-to-left in the array.
- The every() method checks if all array values pass a test.
This example checks if all array values are larger than 18:
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

- The some() method checks if some array values pass a test.
This example checks if some array values are larger than 18:
const numbers = [45, 4, 9, 16, 25];
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
- The indexOf() method searches an array for an element value and returns its position.
- Array.lastIndexOf() is the same as Array.indexOf(), but returns the position of the last occurrence of the specified element.
- The find() method returns the value of the first array element that passes a test function.
This example finds (returns the value of) the first element that is larger than 18:
- The findIndex() method returns the index of the first array element that passes a test function.
- The Array.from() method returns an Array object from any object with a length property or any iterable object.
- The Array.keys() method returns an Array Iterator object with the keys of an array.
- Array.includes() to arrays. This allows us to check if an element is present in an array (including NaN, unlike indexOf).
 
## JavaScript Array Spread (...)

- Spread syntax looks exactly like rest syntax. In a way, spread syntax is the opposite of rest syntax. Spread syntax "expands" an array into its elements, while rest syntax collects multiple elements and "condenses" them into a single element.

- The rest parameter is converse to the spread operator. while the spread operator expands elements of an iterable, the rest operator compresses them. It collects several elements.
- `Spread operator example`
let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]
let concat = [...arr1, ...arr2]
// concat is [ 1, 2, 3, 4, 5, 6, 7, 8 ]  

- `Rest operator example `
let arr=[34,5,22,66,23,78,2]
let [a,b,c, ...rest]=arr;
console.log(a,b,c,d,rest);// output will be 34 5 22 [66, 23, 78, 2]



# Deep and Shallow copy

When we assign a variable to another variable then the first var value copied to the another one but when we assign the one object to another one then the first object memory location copied to the second object.
For example:
let x={name: 'Abbas'};
let y=x;
y.name="Ali"
console.lgo(x) // out put would be Ali not Abbas because we changed the name in the second object.

## Shallow copy
By assigning an object to another object the memory allocation will be copied to another one, when we make some changes in second object it will be applied on the first object also. To solve this problem we use the concept of shallow copy, in which we copy the value of the object to the second object.
let x ={name:"Abbas"};
// let y=Object.assign({},x); //Method 1 of shallow copy
let y={...x}; //Method 2 of shallow copy
y.name="Ali";
console.log("Shallow copy: ", x); // Abbas

## Deep copy
- When we have to copy the nested objects values to others objects then here the nested object concept is used.
let person={name:"Abbas",
address:{
  city:'Jand',
  street:'23'
}
};
let person2=JSON.parse(JSON.stringify(person));
person2.address.city='Islamabad';
console.log(person);

- if a function is included in the object then we use a loadash library to resolve the problem because if we make a deep copy of the object then the function part will not be displayed.
- Lodash To Deep Copy: Lodash is a JavaScript library that provides multiple utility functions and one of the most commonly used functions of the Lodash library is the cloneDeep() method. 


