/*
INSTRUCTIONS:
Create a function that takes a whole number as input and returns the shape with that number's amount of sides. Here are the expected outputs to get from these inputs.

Inputs	Outputs
1	"circle"
2	"semi-circle"
3	"triangle"
4	"square"
5	"pentagon"
6	"hexagon"
7	"heptagon"
8	"octagon"
9	"nonagon"
10	"decagon"
Examples
nSidedShape(3) ➞ "triangle"

nSidedShape(1) ➞ "circle"

nSidedShape(9) ➞ "nonagon"
Notes
There won't be any tests with a number below 1 or greater than 10.
Return the output in lowercase.
The challenge is intended to be completed without conditionals (it would take too long)!
*/

function nSidedShape(n) {
  switch (n) {
    case 1:
      return "circle";
      break;
    case 2:
      return "semi-circle";
      break;
    case 3:
      return "triangle";
      break;
    case 4:
      return "square";
      break;
    case 5:
      return "pentagon";
      break;
    case 6:
      return "hexagon";
      break;
    case 7:
      return "heptagon";
      break;
    case 8:
      return "octagon";
      break;
    case 9:
      return "nonagon";
      break;
    case 10:
      return "decagon";
      break;
  }
}

// // alternative
// function nSidedShape(n) {
//     const shapeDict = {
//         1: 'circle',
//         2: 'semi-circle',
//         3: 'triangle',
//         4: 'square',
//         5: 'pentagon',
//         6: 'hexagon',
//         7: 'heptagon',
//         8: 'octagon',
//         9: 'nonagon',
//         10: 'decagon'
//     }
//     return shapeDict[n]
// }

/*
TESTS:
Test.assertEquals(nSidedShape(1), "circle")
Test.assertEquals(nSidedShape(2), "semi-circle")
Test.assertEquals(nSidedShape(3), "triangle")
Test.assertEquals(nSidedShape(4), "square")
Test.assertEquals(nSidedShape(5), "pentagon")
Test.assertEquals(nSidedShape(6), "hexagon")
Test.assertEquals(nSidedShape(7), "heptagon")
Test.assertEquals(nSidedShape(8), "octagon")
Test.assertEquals(nSidedShape(9), "nonagon")
Test.assertEquals(nSidedShape(10), "decagon")
*/
