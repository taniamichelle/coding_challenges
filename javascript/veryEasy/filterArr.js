/*
INSTRUCTIONS:
Create a function that takes an array of strings and numbers, and filters out the array so that it returns an array of integers only.

Examples:
filterArray([1, 2, 3, "a", "b", 4]) ➞ [1, 2, 3, 4]

filterArray(["A", 0, "Edabit", 1729, "Python", "1729"]) ➞ [0, 1729]

filterArray(["Nothing", "here"]) ➞ []

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
*/

function filterArray(arr) {
  let nums = arr.filter((num) => Number.isInteger(num));
  return nums;
}

/*
TESTS:
Test.assertSimilar(filterArray([1, 2, 3, "a", "b", 4]), [1, 2, 3, 4])
Test.assertSimilar(filterArray(["A", 1, "&amp", 0, -9, "Edabit"]), [1, 0, -9])
Test.assertSimilar(filterArray(["Nothing", "here"]),[])
Test.assertSimilar(filterArray([1, 2, 3, 3.5 , "a", "b", 4 , 5.8 , 6]), [1, 2, 3, 4 , 6])
*/
