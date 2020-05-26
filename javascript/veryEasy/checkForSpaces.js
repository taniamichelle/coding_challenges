/*
INSTRUCTIONS:
Create a function that returns true if a string contains any spaces.

Examples
hasSpaces("hello") ➞ false

hasSpaces("hello, world") ➞ true

hasSpaces(" ") ➞ true

hasSpaces("") ➞ false

hasSpaces(",./!@#") ➞ false
Notes
An empty string does not contain any spaces.
*/

function hasSpaces(str) {
  if (str.includes(" ")) {
    return true;
  } else {
    return false;
  }
}

/*
TESTS:
Test.assertEquals(hasSpaces("Foo"), false)
Test.assertEquals(hasSpaces("Foo bar"), true)
Test.assertEquals(hasSpaces("Foo "), true)
Test.assertEquals(hasSpaces(" Foo"), true)
Test.assertEquals(hasSpaces(" "), true)
Test.assertEquals(hasSpaces(""), false)
Test.assertEquals(hasSpaces(",./;'[]-="), false)
*/
