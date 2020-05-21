/* 
INSTRUCTIONS:
Create a function that takes an array and a string as arguments and return the index of the string.

Examples
findIndex(["hi", "edabit", "fgh", "abc"], "fgh") ➞ 2

findIndex(["Red", "blue", "Blue", "Green"], "blue") ➞ 1

findIndex(["a", "g", "y", "d"], "d") ➞ 3

findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple") ➞ 0
*/

function findIndex(arr, str) {
  return arr.indexOf(str);
}

/*
TESTS:
Test.assertEquals(findIndex(['abc', 'ghj', 'banana', 'grape'], 'grape'), 3)
Test.assertEquals(findIndex(['a', 'b', 'c', 'd', 'e', 'f'], 'f'), 5)
Test.assertEquals(findIndex(['hi', 'edabit.com', 'testcase', 'validstring'], 'edabit.com'), 1)
*/
