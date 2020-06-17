/*
INSTRUCTIONS:
Write a function that takes an array of 10 integers (between 0 and 9) and returns a string in form of a phone number.

Examples
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) ➞ "(123) 456-7890"

createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) ➞ "(111) 111-1111"

createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]) ➞ "(874) 125-6582"
*/

function createPhoneNumber(numbers) {
  return `(${numbers[0]}${numbers[1]}${numbers[2]}) ${numbers[3]}${numbers[4]}${numbers[5]}-${numbers[6]}${numbers[7]}${numbers[8]}${numbers[9]}`;
}

/*
ALTERNATE SOLUTIONS:
A)
const createPhoneNumber = arr =>
    '(xxx) xxx-xxxx'.replace(/x/g, v => arr.shift());
    

B)
function createPhoneNumber(numbers) {
	let number = "(xxx) xxx-xxxx";
	for(let i = 0; i < numbers.length; i++) {
		number = number.replace('x', numbers[i]);
	}
	return number;
}

C)
const createPhoneNumber = numbers => numbers.join("").replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

D)
function createPhoneNumber(numbers) {
	return `(${numbers.slice(0,3).join("")}) ${numbers.slice(3,6).join("")}-${numbers.slice(6).join("")}`
*/

/*
TESTS:
Test.assertEquals(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890")
Test.assertEquals(createPhoneNumber([1, 4, 7, 6, 1, 2, 5, 7, 9, 5]), "(147) 612-5795")
Test.assertEquals(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), "(111) 111-1111")
Test.assertEquals(createPhoneNumber([8, 7, 4, 1, 2, 5, 6, 5, 8, 2]), "(874) 125-6582")
*/
