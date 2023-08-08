# Date

- new Date() creates a date object with the current date and time:
- The toDateString() method converts a date to a more readable format:
const d = new Date();
d.toDateString(); // Tue Aug 08 2023
- Date.parse() returns the number of milliseconds between the date and January 1, 1970:
let msec = Date.parse("March 21, 2012");
- The getFullYear() method returns the year of a date as a four digit number:
- const d = new Date("2021-03-25");
d.getFullYear(); // 2021
- The getDate() method returns the day of a date as a number (1-31):
- The getDay() method returns the weekday of a date as a number (0-6).
- Date.now() returns the number of milliseconds since January 1, 1970.
- The setFullYear() method sets the year of a date object.
- The setMonth() method sets the month of a date object (0-11):
- The setDate() method sets the day of a date object (1-31):



