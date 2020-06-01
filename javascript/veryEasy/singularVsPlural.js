/*
INSTRUCTIONS:
Create a function that takes in a word and determines whether or not it is plural. A plural word is one that ends in "s".

Examples:
isPlural("changes") ➞ true

isPlural("change") ➞ false

isPlural("dudes") ➞ true

isPlural("magic") ➞ false

Notes:
Don't forget to return the result.
Remember that return true (boolean) is not the same as return "true" (string).
This is an oversimplification of the English language. We are ignoring edge cases like "goose" and "geese", "fungus" and "fungi", etc.
If you get stuck on a challenge, find help in the Resources tab.
If you're really stuck, unlock solutions in the Solutions tab.
*/

function isPlural(word) {
  if (word.endsWith("s" || "ies")) {
    return true;
  } else {
    return false;
  }
}

/*
TESTS:
Test.assertEquals(isPlural("dudes"), true)
Test.assertEquals(isPlural("flowers"), true)
Test.assertEquals(isPlural("checks"), true)
Test.assertEquals(isPlural("varies"), true)
Test.assertEquals(isPlural("efforts"), true)
Test.assertEquals(isPlural("mood"), false)
Test.assertEquals(isPlural("whiteboard"), false)
Test.assertEquals(isPlural("cow"), false)
Test.assertEquals(isPlural("word"), false)
Test.assertEquals(isPlural("love"), false)
Test.assertEquals(isPlural("silly"), false)
*/
