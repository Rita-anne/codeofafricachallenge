// QUESTION 2.
// Problem Statement: Given a string, transform it based on the following rules:
// ● If the length of the string is divisible by 3, reverse the entire string.
// ● If the length of the string is divisible by 5, replace each character with its ASCII code.
// ● If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform
// both operations in the order specified above.

function transformString(input) {
  const length = input.length;

  // Check divisibility by 15, 5, and 3
  if (length % 15 === 0) {
    // Divisible by 15: Reverse the string and replace characters with ASCII codes
    const reversedString = input.split("").reverse().join("");
    return reversedString
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 5 === 0) {
    // Divisible by 5: Replace characters with ASCII codes
    return input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    // Divisible by 3: Reverse the string
    return input.split("").reverse().join("");
  } else {
    // No transformation needed
    return input;
  }
}

// Example 1
console.log(transformString("Gakiza")); // Output: "azakiG"

// Example 2
console.log(transformString("Hey there i am coding")); // Output: "gnidoc ma i ereht yeH"

// Example 3
console.log(transformString("Chocolate Chipss")); // Output: "Chocolate Chipss"
