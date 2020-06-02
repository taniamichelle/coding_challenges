/*
INSTRUCTIONS:
Create a function that returns the number of arguments it was called with.

Examples
numArgs() ➞ 0

numArgs("foo") ➞ 1

numArgs("foo", "bar") ➞ 2

numArgs(true, false) ➞ 2

numArgs({}) ➞ 1
*/

function numArgs() {
  return arguments.length;
}

/*
TESTS:
Test.assertEquals(numArgs(), 0)
Test.assertEquals(numArgs('foo'), 1)
Test.assertEquals(numArgs('foo', 'bar'), 2)
Test.assertEquals(numArgs(null, null), 2)
Test.assertEquals(numArgs('foo', 'bar', 5, null), 4)
Test.assertEquals(numArgs(false), 1)
Test.assertEquals(numArgs('foo', {}), 2)
Test.assertEquals(numArgs('foo', 'bar', {}), 3)
Test.assertEquals(numArgs([], [], {}), 3)
Test.assertEquals(numArgs('foo', 'bar', true, null, 0), 5)
*/
