/*
INSTRUCTIONS:
Create a function which validates whether a given number exists, and could represent a real life quantity. Inputs will be given as a string.

Examples:
validStrNumber("3.2") ➞ true

validStrNumber("324") ➞ true

validStrNumber("54..4") ➞ false

validStrNumber("number") ➞ false

Notes:
Accept numbers such as .5 and 0003.
*/

function validStrNumber(n) {
  if (isNaN(n)) {
    return false;
  } else {
    return true;
  }
}

/*
TESTS:
Test.assertEquals(validStrNumber("3.2"), true)
Test.assertEquals(validStrNumber("324"), true)
Test.assertEquals(validStrNumber("54..4"), false)
Test.assertEquals(validStrNumber("number"), false)
Test.assertEquals(validStrNumber(".5"), true)
Test.assertEquals(validStrNumber("03"), true)
Test.assertEquals(validStrNumber("3.e"), false)
Test.assertEquals(validStrNumber("1234321"), true)
Test.assertEquals(validStrNumber(".42.3"), false)
Test.assertEquals(validStrNumber("0000000"), true)
Test.assertEquals(validStrNumber("000.000"), true)
*/
