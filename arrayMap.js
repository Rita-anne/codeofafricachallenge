// QUESTION 1.  Given an array of integers and a target sum, determine if there exists a contiguous
// subarray within the array that sums up to the target. Return true if such a subarray exists,
// otherwise return false.

function contiguousSubarrayWithSum(arr, target) {
  let start = 0;
  let currentSum = 0;

  for (let end = 0; end < arr.length; end++) {
    currentSum += arr[end];

    // Shrink the window as long as currentSum is larger than the target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // Check if we have found the target sum
    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// Example 1
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(contiguousSubarrayWithSum(arr, target)); // Output is true

//Example 2
const nbr = [1, 4, 3, 2];
const trgt = 17;
console.log(contiguousSubarrayWithSum(nbr, trgt)); // Output is False
