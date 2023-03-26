function threeSum(arr, target) {
  // Sort the array in non-decreasing order
  arr.sort((a, b) => a - b);
  let closestSum = Infinity;

  // Loop through each possible leftmost element in the triplet
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;

    // Loop through possible remaining pairs using two pointers
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];

      // Update closestSum if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }

      // If the current sum is too large, move the right pointer left
      if (sum > target) {
        right--;
      } 
      // If the current sum is too small, move the left pointer right
      else {
        left++;
      }
    }
  }

  return closestSum;
}

module.exports = threeSum;
