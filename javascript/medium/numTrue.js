/*
INSTRUCTIONS:
Create a function which returns the number of true values there are in an array.

Examples
countTrue([true, false, false, true, false]) ➞ 2

countTrue([false, false, false, false]) ➞ 0

countTrue([]) ➞ 0
Notes
Return 0 if given an empty array.
All array items are of the type bool (true or false).
*/

function countTrue(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == true) {
      count += 1;
    }
  }
  return count;
}

/*
ALTERNATE SOLUTIONS:
-FILTER:
1)
const countTrue = r => r.filter(Boolean).length

2)
function countTrue(arr) {
	return arr.filter(x=>x==true).length
}

3)
const countTrue = (arr) => arr.filter(Boolean).length;

4)
function countTrue(arr){
	return arr.filter(function(value){
    return value === true;
	}).length
}

5)
function countTrue(arr) {
	let m = arr.filter(t => {
		return t === true;
	})
	return m.length;
}

-MAP:
1)
function countTrue(arr) {
	let total = 0;
	arr.map(x => x === true ? total += 1 : x);
	return total;
}
/*
TESTS:
Test.assertEquals(countTrue([true, false, false, true, false]), 2)
Test.assertEquals(countTrue([false, false, false, false]), 0)
Test.assertEquals(countTrue([]), 0)
Test.assertEquals(countTrue([false, false, true, true, false, false, false, true, true, true, true, false, true, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, false, false, false, false, false]), 3)
Test.assertEquals(countTrue([false, true, true, false, true, true, false, true, false, true, false, true, false, true, false]), 8)
Test.assertEquals(countTrue([true, false, true, true, true, false, true, true, false, false]), 6)
Test.assertEquals(countTrue([false, false, false, false, true, false, true, false, true, false, false]), 3)
Test.assertEquals(countTrue([true, false, false, false, true, false, false, true, false, false, false]), 3)
Test.assertEquals(countTrue([true, true, false, true, false, false, false, false, true, false]), 4)
Test.assertEquals(countTrue([true, false, true, true, false, true, true, true, true, false, true, false, true, false]), 9)
Test.assertEquals(countTrue([true, false, true, true, true, true, false, true, true, false, true, false, false, false, false]), 8)
Test.assertEquals(countTrue([true, true, false, false, false, false, true, false, true, true, false, true]), 6)
*/
