const nums1 = [11, 3, 14, 10, 8, 6, 2, 7];
const nums2 = [11, 8, 14, 3, 3, 3, 6, 2, 7];
const nums3 = [1, 17, 12, 3, 9, 13, 21, 4, 27];
const nums4 = [2, 1];


function quickSort(nums = [], left = 0, right = nums.length - 1) {
  if (left < right) {
    const pivotIndex = partition(nums, left, right);
    quickSort(nums, left, pivotIndex);
    quickSort(nums, pivotIndex + 1, right);
  }
  return nums;
}


function partition(nums, left = 0, right = nums.length - 1) {
  //Step 1: choose any number from the arr as the pivot
  //Step 2: move the nums smaller than the pivot on the left
  // and nums greats than pivot on the right
  //Step 3: return the pivot index
  let pivot = nums[Math.floor((left + right) / 2)];
  let i = left;
  let j = right;
  while (i <= j) {
    while (nums[i] < pivot) {
      i++;
    }
    while (nums[j] > pivot) {
      j--;
    }
    if (i <= j) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    }
  }
  console.log(nums);
  console.log(pivot);
  console.log(i)
  return i;
}

quickSort(nums1)

function partition2(nums, leftIdx = 0, rightIdx = nums.length - 1) {
  const midIdx = Math.floor((leftIdx + rightIdx) / 2);
  const pivotVal = nums[midIdx];
  const tempPivotIdx = rightIdx;

  // Swap the pivot to the end of the section being partitioned so its
  // position can be kept track of, then move it last to its final position.
  [nums[midIdx], nums[tempPivotIdx]] = [nums[tempPivotIdx], nums[midIdx]];

  // Skip over the pivot that was moved to the end so it stays there for now.
  rightIdx = tempPivotIdx - 1;

  // Look for a num on the left and on the right that both need to be moved to
  // the other side so one swap can move both of them to the correct side.
  while (true) {
    // Move leftIdx until we find a num that is out of place.
    while (nums[leftIdx] < pivotVal) {
      leftIdx += 1;
    }

    // Move rightIdx until we find a num that is out of place.
    while (nums[rightIdx] > pivotVal) {
      rightIdx -= 1;
    }

    // All nums have been iterated over, partitioning is complete.
    if (leftIdx >= rightIdx) {
      // Swap the pivot to it's final location.
      [nums[tempPivotIdx], nums[leftIdx]] = [nums[leftIdx], nums[tempPivotIdx]];
      return leftIdx;
    }

    // Swap the two out of place nums so they will both be on the correct side.
    [nums[leftIdx], nums[rightIdx]] = [nums[rightIdx], nums[leftIdx]];

    // After swapping, we're done with this pair, move on.
    leftIdx += 1;
    rightIdx -= 1;
  }
}