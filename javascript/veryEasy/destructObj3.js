/*
INSTRUCTIONS:
const obj =  { two : 2 }

var { one, two } = obj

console.log(one) // outputs undefined
Sometimes an object will be missing properties we are expecting. We can avoid undefined errors by using default values. Use ES6 object destructuring to add a default value of 1 to the one variable. Ignore the .toString() function (used for validation).
*/

//const str = `({ one, two } = { two : 2 }).toString()`
const str = `({ one=1, two } = { two : 2 }).toString()`;

/*
TESTS:
eval(str)

const validString = (str) => {
  return /\{.*(one).*\=.*1.*(two).*\}.*\=/.test(str) ? "valid" : "not valid"
}

Test.assertEquals(validString(str), "valid", "You must give the variable one a default value")
Test.assertEquals(one, 1, "The variable one must equal 1")
Test.assertEquals(two, 2, "The variable two must equal 2")
*/
