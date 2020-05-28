/*
INSTRUCTIONS:
Create a function that returns the total number of parameters passed in.

Examples:
numberArgs("a", "b", "c") ➞ 3

numberArgs(10, 20, 30, 40, 50) ➞ 5

numberArgs(x, y) ➞ 2

numberArgs() ➞ 0

Notes:
How can you express the input parameter so it takes a variable number of arguments?
*/

// GIVEN:
// function numberArgs(/* fill-in */) {}

function numberArgs(...params) {
  return arguments.length;
}

/*
TESTS:
Test.assertEquals(numberArgs('a', 'b', 'c'), 3)
Test.assertEquals(numberArgs(10, 20, 30, 40, 50), 5)
Test.assertEquals(numberArgs('x', 'y'), 2)
Test.assertEquals(numberArgs(), 0)
*/
