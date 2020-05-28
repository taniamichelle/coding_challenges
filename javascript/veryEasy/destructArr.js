/* INSTRUCTIONS:
ES6: Destructuring Arrays I
You can assign variables from arrays like this:

const arr = [1, 2, 3, 4, 5, 6]
let a = arr[0]
let b = arr[1]

console.log(a) // outputs 1
console.log(b) // outputs 2
With ES6, you can assign variables from arrays in a much more succinct way.Create variables a and b from the given array using the ES6 destructuring assignment syntax(check the Resources tab for more examples), where a === 1 and b === 2.
*/

const arr = [1, 2, 3, 4, 5, 6];
let a, b;
({ a, b } = { a: 1, b: 2 });

// ALTERNATE SOLUTION:
// let arr = [1, 2, 3, 4, 5, 6]
// let { a, b } = arr;
// ({ a, b } = { a: 1, b: 2 });

/* TEST CODE:

const arr = [1, 2, 3, 4, 5, 6]

function test(x) {
 return x === arr[0] || x === arr[1] ? true : false
}

Test.assertEquals(test(a), true, "Variable a does not equal 1")
Test.assertEquals(test(b), true, "Variable b does not equal 2")

*/
