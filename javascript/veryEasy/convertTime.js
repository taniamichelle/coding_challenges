/* INSTRUCTIONS:
Convert Hours and Minutes into Seconds
Write a function that takes two integers (hours, minutes) and converts them into seconds.

Examples
convert(1, 3) ➞ 3780

convert(2, 0) ➞ 7200

convert(0, 0) ➞ 0
*/

function convert(hours, minutes) {
  return hours * 3600 + minutes * 60;
}

/* ALTERNATE:
function convert(hours, minutes) {
	if (hours > 0 && minutes > 0) {
        return 3600 * minutes * hours
    } else if (hours > 0 && minutes < 1) {
       let seconds = 60 * minutes || 3600 * hours;
	return seconds
    } else if (hours < 1 && minutes > 0) {
        let seconds = 60 * minutes || 3600 * hours;
	return seconds
    }
}
*/

/* TESTS:
Test.assertEquals(convert(1, 0), 3600)
Test.assertEquals(convert(1, 3), 3780)
Test.assertEquals(convert(0, 30), 1800)
*/
