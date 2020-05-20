/* INSTRUCTIONS:
Create a function that takes a string and returns it as an integer.

    Examples
stringInt("6") ➞ 6

stringInt("1000") ➞ 1000

stringInt("12") ➞ 12
Notes
All numbers will be whole numbers.
*/

function stringInt(str) {
  let int = parseInt(str, 10);
  return int;
}

/*
TESTS:
Test.assertEquals(stringInt("6"), 6)
Test.assertEquals(stringInt("2"), 2)
Test.assertEquals(stringInt("10"), 10)
Test.assertEquals(stringInt("666"), 666)
*/
