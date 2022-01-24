// ref: https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

// To test the function, use Shell in the terminal on the right. Type node W1D1.js

// loop through array
// check for edge case (array.length = 1) return array
// check current index with last one for value compare(?)
// i is array position?
// j is previous position?
const numsOrdered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numsRandomOrder = [9, 2, 5, 6, 4, 3, 7, 10, 1, 8];
const numsReversed = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function insertionSort(nums) {
  if ( nums.length < 2 ){
    return nums 
  }
  for (let i = 1; i < nums.length; i++) {
    let j = i;
    while( nums[j] < nums[j-1] && j>0){
      temp = nums[j]
      nums[j]= nums[j-1]
      nums[j-1] = temp
      j--
    }
  }
  return nums
}
console.log(insertionSort(numsRandomOrder))
console.log(insertionSort(numsReversed))

