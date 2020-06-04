/*
INSTRUCTIONS:
Async operations don't always go as planned. When errors creep up we need to know how to handle them. We can pass the reject callback to our executor function to pass errors to our promise.

let promise = new Promise( (resolve, reject) => {
  setTimeout(( ) => {
    //something went wrong
reject('oops!')
  }, 1000)
})
You can pass Error objects as well.Here we pass a simple string "oops!".

    Challenge
Reject the promise with the simple string "It's not a dog!".
*/

let promise = new Promise((resolve) => {
  let animal = "cat";
  setTimeout(() => {
    if (animal === "dog") {
      resolve("It's a dog!");
    }
    if (animal !== "dog") {
      /* need something here, you might also need to pass
			something else besides the resolve callback */
    }
  }, 1000);
});

/*
TESTS:
Test.assertEquals(promise, promise)

promise.then(res => Test.assertEquals(res, "Ignore this test","Do not change the animal variable." ))
            .catch(e => Test.assertEquals(e, "It's not a dog!"))
            */
