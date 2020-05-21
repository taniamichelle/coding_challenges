/*
INSTRUCTIONS:
There is a single operator in JavaScript, capable of providing the remainder of a division operation. Two numbers are passed as parameters. The first parameter divided by the second parameter will have a remainder, possibly zero. Return that value.

Examples
remainder(1, 3) ➞ 1

remainder(3, 4) ➞ 3

remainder(-9, 45) ➞ -9

remainder(5, 5) ➞ 0
Notes
The tests only use positive and negative integers.
*/

function remainder(x, y) {
  return x % y;
}

/*
TESTS:
Test.assertEquals(remainder(7, 2), 1)
Test.assertEquals(remainder(3, 4), 3)
Test.assertEquals(remainder(-9, 45), -9)
Test.assertEquals(remainder(5, 5), 0)
*/
