//function firstNonRepeatedChar(str) {
 // Write your code here
	function firstNonRepeatedChar(str) {
  // Create an object to store character frequencies
  const charFrequency = {};

  // Iterate through the string and count character frequencies
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else {
      charFrequency[char] = 1;
    }
  }

  // Iterate through the string again to find the first non-repeated character
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charFrequency[char] === 1) {
      return char; // Return the first non-repeated character
    }
  }

  // If no non-repeated character is found, return null
  return null;
}

// Example usage:
const inputString = "leetcode";
const result = firstNonRepeatedChar(inputString);
console.log(result); // Output: "l"

}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
