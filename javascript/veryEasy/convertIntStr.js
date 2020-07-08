/*
INSTRUCTIONS:
Write two functions:

toInt() : A function to convert a string to an integer.
toStr() : A function to convert an integer to a string.
Examples
toInt("77") ➞ 77

toInt("532") ➞ 532

toStr(77) ➞ "77"

toStr(532) ➞ "532"
*/

function toInt(str) {
  return parseInt(str);
}

function toStr(int) {
  return int.toString();
}

/*
TESTS:
Test.assertEquals(toInt("37"), 37)
Test.assertEquals(toInt("113"), 113)
Test.assertEquals(toInt("5"), 5)
Test.assertEquals(toInt("5231"), 5231)
Test.assertEquals(toStr(37), "37")
Test.assertEquals(toStr(113), "113")
Test.assertEquals(toStr(5), "5")
Test.assertEquals(toStr(5231), "5231")
*/
