# Converting Strings to Numbers
- The global method Number() converts a variable (or a value) into a number.

# JavaScript Regular Expressions
A regular expression is a sequence of characters that forms a search pattern.

When you search for data in a text, you can use this search pattern to describe what you are searching for.

A regular expression can be a single character, or a more complicated pattern.

Regular expressions can be used to perform all types of text search and text replace operations.
* Syntax
/pattern/modifiers;
/w3schools/i;

- In JavaScript, regular expressions are often used with the two string methods: search() and replace().

* The search() method uses an expression to search for a match, and returns the position of the match.

* The replace() method returns a modified string where the pattern is replaced.

- Modifier	Description
* i	        Perform case-insensitive matching	
* g	        Perform a global match (find all matches rather than stopping after the first match)	
* m	        Perform multiline matching

- Brackets are used to find a range of characters:
* [abc]	Find any of the characters between the brackets
* (x|y)	Find any of the alternatives separated with |

- The test() method is a RegExp expression method.

It searches a string for a pattern, and returns true or false, depending on the result.

The following example searches a string for the character "e":
const pattern = /e/;
pattern.test("The best things in life are free!");

- The exec() method is a RegExp expression method.

It searches a string for a specified pattern, and returns the found text as an object.
/e/.exec("The best things in life are free!");


# JavaScript Error-Handling
The try statement defines a code block to run (to try).

The catch statement defines a code block to handle any error.

The finally statement defines a code block to run regardless of the result.

The throw statement defines a custom error.



