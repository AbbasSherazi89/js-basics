## STRINGS
JavaScript strings are for storing and manipulating text.

## Strings Methods

# 1 slice(start, end)
- slice() extracts a part of a string and returns the extracted part in a new string.
- The method takes 2 parameters: start position, and end position (end not included).
- If a parameter is negative, the position is counted from the end of the string

# 2 substr(start,length)
it is similar to slice but the difference is that in substr the second part defined the length of the string.

# 3 replace()
- The replace() method replaces a specified value with another value in a string:
- The replace() method replaces only the first match
- If you want to replace all matches, use a regular expression with the /g flag.

# 4 concat()
concat() joins two or more strings:
The concat() method can be used instead of the plus operator. 

# 5 trim()
The trim() method removes white spaces from both the end of string. 

# 6 trimStart()
The trimStart() method works like trim(), but removes whitespace only from the start of a string.

# 7 trimEnd()
The trimEnd() method works like trim(), but removes whitespace only from the end of a string.

# 8 padStart()
The padStart() method pads a string from the start.
It pads a string with another string (multiple times) until it reaches a given length.

# 9 padEnd()
The padEnd() method is a string method.

# 10 charAt()
The charAt() method returns the character at a specified index (position) in a string:

# 11 charCodeAt()
The charCodeAt() method returns the unicode of the character at a specified index in a string:

# 12 split()
A string can be converted to an array with the split() method.

## Note
All string methods return a new string. They don't modify the original string.

## String Search Methods

The indexOf() method returns the index (position) the first occurrence of a string in a string.
The lastIndexOf() method returns the index of the last occurrence of a specified text in a string:
Both methods accept a second parameter as the starting position for the search:
The search() method searches a string for a string (or a regular expression) and returns the position of the match:
The two methods are NOT equal. These are the differences:
# Note
The search() method cannot take a second start position argument.
The indexOf() method cannot take powerful search values (regular expressions).

The match() method returns an array containing the results of matching a string against a string (or a regular expression).
The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression).
The includes() method returns true if a string contains a specified value.
The startsWith() method returns true if a string begins with a specified value. Otherwise it returns false.
The endsWith() method returns true if a string ends with a specified value. Otherwise it returns false:

## JavaScript Template Literals
Template Literals use back-ticks (``) rather than the quotes ("") to define a string:
let text = `Hello World!`;
Template literals allow variables in strings:
let firstName = "John";
let lastName = "Doe";

let text = `Welcome ${firstName}, ${lastName}!`;


## JavaScript Number Methods
- toString()	Returns a number as a string
- toExponential()	Returns a number written in exponential notation
- toFixed()	Returns a number written with a number of decimals
- toPrecision()	Returns a number written with a specified length
- ValueOf()	Returns a number as a number
- parseInt() parses a string and returns a whole number. Spaces are allowed. Only the first number is returned:
- parseFloat() parses a string and returns a number. Spaces are allowed. Only the first number is returned: