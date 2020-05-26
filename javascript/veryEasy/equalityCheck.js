/*
INSTRUCTIONS:
In this challenge, you must verify the equality of two different given parameters: a and b.

Both the value and the type of parameters need to be tested in order to have a matching equality. The possible types of the given parameters are:

Numbers
Strings
Booleans (false or true)
Special values: undefined, null and NaN
What have you learned so far that will permit you to do two different checks (value and type) with a single statement?

Implement a function that returns true if the parameters are equal, and false if they are different.

Examples
checkEquality(1, true) ➞ false
// A number and a boolean: their type is different

checkEquality(0, "0") ➞ false
// A number and a string: their type is different

checkEquality(1,  1) ➞ true
// A number and a number: their type and value are equal
*/

function checkEquality(a, b) {}

/*
TESTS:
Test.assertEquals(checkEquality(1, true), false, "Example #1")
Test.assertEquals(checkEquality(0, "0"), false, "Example #2")
Test.assertEquals(checkEquality(1, 1), true, "Example #3")
Test.assertEquals(checkEquality(0, ""), false)
Test.assertEquals(checkEquality(1, "1"), false)
Test.assertEquals(checkEquality(0, false), false)
Test.assertEquals(checkEquality(NaN, NaN), false)
Test.assertEquals(checkEquality(null, undefined), false)
Test.assertEquals(checkEquality(undefined, undefined), true)
Test.assertEquals(checkEquality(false, null), false)
*/
