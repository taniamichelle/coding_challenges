/*
INSTRUCTIONS:
Create a function that returns the ASCII value of the passed in character.

Examples
ctoa("A") ➞ 65

ctoa("m") ➞ 109

ctoa("[") ➞ 91

ctoa("\") ➞ 92

*/

function ctoa(c) {
  return c.codePointAt(0);
}

/*
TESTS:
Test.assertEquals(ctoa(' '), 32)
Test.assertEquals(ctoa('A'), 65)
Test.assertEquals(ctoa(']'), 93)
Test.assertEquals(ctoa('^'), 94)
Test.assertEquals(ctoa('c'), 99)
*/
