let text = "Apple banana Mango banana kiwi";
let text2 = "Coconut, Peanut,";
let text3 = "Hello";

let part = text.slice(3, 12);
console.log(part);

let part1 = text.slice(5);
console.log(part1);

let sbstr = text.substring(7, 6);
console.log(sbstr);

let rplace = text.replace("banana", "Kiwi");
console.log(rplace);

let rplace1 = text.replace(/banana/g, "apricot");
console.log(rplace1);

console.log((rplace1 = text.toLocaleUpperCase()));
console.log((rplace1 = text.toLocaleLowerCase()));

console.log(text.concat(" *** ", text2));

let padded = text3.padStart(10, "0");
console.log(padded);

console.log(text3.charAt(1));
console.log("here",text3.charCodeAt("H"));

let splitted = text.split(" ");
console.log(splitted[2]);

const splitted1 = text.split(" ");

text = "";
for (let i = 0; i < splitted1.length; i++) {
  text += splitted1[i] + "\n";
}

console.log(text);

let x=34.9846;
console.log(x.toString());
console.log(x.toExponential());
console.log(x.toExponential(4));
console.log(x.toExponential(6));
console.log(x.toFixed(3));
console.log(x.toPrecision());
console.log(Number(new Date("1970-01-01")));
console.log(parseInt("10 20 30"));
console.log(parseInt("10 years"));
console.log(parseInt("years 10"));
console.log(parseFloat("10.33"));
console.log(Number.isInteger(10));
console.log(Number.isInteger(10.5));