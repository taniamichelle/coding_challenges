/* INSTRUCTIONS:
Find the Perimeter of a Rectangle
Create a function that takes height and width and finds the perimeter of a rectangle.

    Examples
findPerimeter(6, 7) ➞ 26

findPerimeter(20, 10) ➞ 60

findPerimeter(2, 9) ➞ 22
*/

function findPerimeter(height, width) {
  return 2 * height + 2 * width;
}

/* TESTS:
Test.assertEquals(findPerimeter(6, 7), 26)
Test.assertEquals(findPerimeter(20, 10), 60)
Test.assertEquals(findPerimeter(2, 9), 22)
*/
