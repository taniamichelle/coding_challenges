/*
INSTRUCTIONS:
Create a function that finds the index of a given item.

Examples
search([1, 5, 3], 5) ➞ 1

search([9, 8, 3], 3) ➞ 2

search([1, 2, 3], 4) ➞ -1
Notes
If the item is not present, return -1.
*/

function search(arr, item) {
  return arr.indexOf(item);
}

/*
TESTS:
Test.assertEquals(search([1, 5, 3], 5), 1)
Test.assertEquals(search([9, 8, 3], 3), 2)
Test.assertEquals(search([1, 2, 3], 4), -1)
Test.assertEquals(search([1, 5, 3, 10, 17, 20, -6], 20), 5)
*/
