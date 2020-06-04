/*
INSTRUCTIONS:
Create a function that takes a number as an argument and returns "even" for even numbers and "odd" for odd numbers.

Examples
isEvenOrOdd(3) ➞ "odd"

isEvenOrOdd(146) ➞ "even"

isEvenOrOdd(19) ➞ "odd"
*/

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}

/*
TESTS:
Test.assertEquals(isEvenOrOdd(3), "odd")
Test.assertEquals(isEvenOrOdd(0), "even")
Test.assertEquals(isEvenOrOdd(7), "odd")
Test.assertEquals(isEvenOrOdd(12), "even")
Test.assertEquals(isEvenOrOdd(6474), "even")
Test.assertEquals(isEvenOrOdd(0563), "odd")
Test.assertEquals(isEvenOrOdd(3), "odd")
Test.assertEquals(isEvenOrOdd(0000001111100000), "even")
Test.assertEquals(isEvenOrOdd(301), "odd")
Test.assertEquals(isEvenOrOdd(-3), "odd")
Test.assertEquals(isEvenOrOdd(-0), "even")
Test.assertEquals(isEvenOrOdd(-7), "odd")
Test.assertEquals(isEvenOrOdd(-12), "even")
Test.assertEquals(isEvenOrOdd(-6474), "even")
Test.assertEquals(isEvenOrOdd(-0563), "odd")
Test.assertEquals(isEvenOrOdd(-3), "odd")
Test.assertEquals(isEvenOrOdd(-0000001111100000), "even")
Test.assertEquals(isEvenOrOdd(-301), "odd")
*/
