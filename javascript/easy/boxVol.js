/*
INSTRUCTIONS:
Create a function that takes an object argument sizes (contains width, length, height keys) and returns the volume of the box.

Examples:
volumeOfBox({ width: 2, length: 5, height: 1 }) ➞ 10

volumeOfBox({ width: 4, length: 2, height: 2 }) ➞ 16

volumeOfBox({ width: 2, length: 3, height: 5 }) ➞ 30
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
*/

function volumeOfBox(sizes) {
  return sizes.width * sizes.length * sizes.height;
}

/*
TESTS:
Test.assertEquals(volumeOfBox({width: 11,length: 1, height: 2}), 22)
Test.assertEquals(volumeOfBox({width: 1, length: 5,  height: 3}), 15)
Test.assertEquals(volumeOfBox({width: 2, length: 1,  height: 1}), 2)
Test.assertEquals(volumeOfBox({width: 2, length: 6,  height: 5}), 60)
Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 3}), 30)
Test.assertEquals(volumeOfBox({width: 2, length: 5,  height: 1}), 10)
*/
