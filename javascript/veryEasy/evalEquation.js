/*
INSTRUCTIONS:
Create a function that evaluates an equation.

Examples
eq("1+2") ➞ 3

eq("6/(9-7)") ➞ 3

eq("3+2-4") ➞ 1
Notes
Don't print, return a value.
Return the value, not the equation.
*/

function eq(evaluate) {
  return eval(evaluate);
}

/*
TESTS:
Test.assertEquals(eq("1+2"), 3)
Test.assertEquals(eq("6/(9-7)"), 3)
Test.assertEquals(eq("3+2-4"), 1)
Test.assertEquals(eq("3*4+1"), 13)
Test.assertEquals(eq("5*8-4*9"), 4)
Test.assertEquals(eq("3**7"), 2187)
Test.assertEquals(eq("(6**3)+3"), 219)
*/
