/*
INSTRUCTIONS:
The packaging system is running wild! The candy is lying loose all over in the warehouse, the cereal is missing, and bread is stuffed in a bottle. What is going on here? The candy should be in plastic and the bread should be in a bag.

The packaging machine is running the getContainer() function to retrieve the container of a product. But something is not right...

Examples
getContainer("Bread") ➞ "bag"

getContainer("Beer") ➞ "bottle"

getContainer("Candy") ➞ "plastic"

getContainer("Cheese") ➞ null
Notes
Think about what the object's packaging should be.
*/

function getContainer(product) {
  let container;
  switch (product) {
    case "Bread":
      container = "bag";
    case "Beer":
    case "Milk":
      container = "bottle";
      break;
    case "Cerials":
      container = "box";
      break;
    case "Eggs":
      container = "carton";
      break;
    case "Candy":
      container = "plastic";
    default:
      container = null;
  }

  return container;
}

/*
TESTS:
Test.assertEquals(getContainer("Bread"), "bag")
Test.assertEquals(getContainer("Milk"), "bottle")
Test.assertEquals(getContainer("Beer"), "bottle")
Test.assertEquals(getContainer("Eggs"), "carton")
Test.assertEquals(getContainer("Candy"), "plastic")
Test.assertEquals(getContainer("Cheese"), null)
*/
