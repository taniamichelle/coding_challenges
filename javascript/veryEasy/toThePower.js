/*
INSTRUCTIONS:
Create a function that takes a base number and an exponent number and returns the calculation.

    Examples
calculateExponent(5, 5) ➞ 3125

calculateExponent(10, 10) ➞ 10000000000

calculateExponent(3, 3) ➞ 27
Notes
All test inputs will be positive integers.
*/

function calculateExponent(num, exp) {
  return Math.pow(num, exp);
}

/*
TESTS:
Test.assertEquals(calculateExponent(5,5), 3125)
Test.assertEquals(calculateExponent(3,3), 27)
Test.assertEquals(calculateExponent(10,10), 10000000000)
*/
