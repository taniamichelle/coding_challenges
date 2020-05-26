/*
INSTRUCTIONS:
Create a function that takes in a current mood and return a sentence in the following format: "Today, I am feeling {mood}".However, if no argument is passed, return "Today, I am feeling neutral".

    Examples
moodToday("happy") ➞ "Today, I am feeling happy"

moodToday("sad") ➞ "Today, I am feeling sad"

moodToday() ➞ "Today, I am feeling neutral"
*/

// GIVEN:
// function moodToday(mood) {}

function moodToday(mood = "neutral") {
  return `Today, I am feeling ${mood}`;
}

/*
TESTS:
Test.assertEquals(moodToday("happy"), "Today, I am feeling happy")
Test.assertEquals(moodToday("sad"), "Today, I am feeling sad")
Test.assertEquals(moodToday("very happy"), "Today, I am feeling very happy")
Test.assertEquals(moodToday("rather empty inside"), "Today, I am feeling rather empty inside")
Test.assertEquals(moodToday("confused"), "Today, I am feeling confused")
Test.assertEquals(moodToday(), "Today, I am feeling neutral")
*/
