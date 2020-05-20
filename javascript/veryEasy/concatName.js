/*
INSTRUCTIONS:
Given two strings, firstName and lastName, return a single string in the format "last, first".

Examples
concatName("First", "Last") ➞ "Last, First"

concatName("John", "Doe") ➞ "Doe, John"

concatName("Mary", "Jane") ➞ "Jane, Mary"
*/

function concatName(firstName, lastName) {
  return `${lastName}, ${firstName}`;
}

/*
TESTS:
Test.assertEquals(concatName("John", "Doe"), "Doe, John")
Test.assertEquals(concatName("First", "Last"), "Last, First")
Test.assertEquals(concatName("A", "B"), "B, A")

// In case someone is making odd assumptions about comma characters.
Test.assertEquals(concatName(",", ","), ",, ,")
*/
