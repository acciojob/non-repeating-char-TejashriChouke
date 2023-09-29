function firstNonRepeatedChar(str) {
 // Write your code here
	const charCount = {};

  // Iterate through the string to count the occurrences of each character
  for (const char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (const char of str) {
    if (charCount[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  return null; // Return null if there are no non-repeated characters
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));