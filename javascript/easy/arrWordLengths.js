/*
INSTRUCTIONS:
Create a function that takes an array of words and transforms it into an array of each word's length.

Examples
wordLengths(["hello", "world"]) ➞ [5, 5]

wordLengths(["Halloween", "Thanksgiving", "Christmas"]) ➞ [9, 12, 9]

wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]) ➞ [3, 5, 9, 4, 2, 3, 8]
Notes
No test case will contain punctuation.
Arrays can be of various lengths.
*/

function wordLengths(arr) {
  return arr.map((i) => i.length);
}

/*ALTERNATE:
const wordLengths = arr => arr.map(word => word.length);

function wordLengths(array){
	let arrayLength = []
	for (i=0; i<array.length;i++){
		arrayLength.push(array[i].length)
	}
	return arrayLength
}

function wordLengths(arr) {
	const lengthsArr = arr.map(function(a) {
			return a.length})

	return lengthsArr
}

function wordLengths(array){
 let res = [];
 for(i=0;i<array.length;i++)
	 res[i]=array[i].length;
 return res;
}
*/

/*
TESTS:
Test.assertSimilar(wordLengths(["hello", "world"]), [5, 5], "Example #1")
Test.assertSimilar(wordLengths(["Halloween", "Thanksgiving", "Christmas"]), [9, 12, 9], "Example #2")
Test.assertSimilar(wordLengths(["She", "sells", "seashells", "down", "by", "the", "seashore"]), [3, 5, 9, 4, 2, 3, 8], "Example #3")
Test.assertSimilar(wordLengths(["Indiana", "Jones", "and", "the", "Temple", "of", "Doom"]), [7, 5, 3, 3, 6, 2, 4])
Test.assertSimilar(wordLengths(["Programming", "is", "fun"]), [11, 2, 3])
*/
