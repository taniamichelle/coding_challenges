/*
INSTRUCTIONS:
Create a function that returns the string "Burp" with the amount of "r's" determined by the input parameters of the function.

Examples:
longBurp(3) ➞ "Burrrp"

longBurp(5) ➞ "Burrrrrp"

longBurp(9) ➞ "Burrrrrrrrrp"

Notes:
Expect num to always be >= 1.
*/

function longBurp(num) {
  let str1 = "Bu";
  let str2 = "r";
  let repeatStr2 = str2.repeat(num);
  let str3 = "p";
  return `${str1}` + `${repeatStr2}` + `${str3}`;
}

/*
TESTS:
Test.assertEquals(longBurp(3), "Burrrp")
Test.assertEquals(longBurp(5), "Burrrrrp")
Test.assertEquals(longBurp(9), "Burrrrrrrrrp")
Test.assertEquals(longBurp(10), "Burrrrrrrrrrp")
Test.assertEquals(longBurp(13), "Burrrrrrrrrrrrrp")
Test.assertEquals(longBurp(18), "Burrrrrrrrrrrrrrrrrrp")
Test.assertEquals(longBurp(1), "Burp")
*/
