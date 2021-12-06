/* 
  Given an array of strings
  return a sum to represent how many times each array item is found (a frequency table)
  Useful methods:
    Object.hasOwnProperty("keyName")
      - returns true or false if the object has the key or not
    Python: key in dict
*/

const arr1 = ["a", "a", "a"];
const expected1 = {
  a: 3,
};

const arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"];
const expected2 = {
  a: 2,
  b: 1,
  c: 3,
  B: 1,
  d: 1,
};

const arr3 = [];
const expected3 = {};

/**
 * Builds a frequency table based on the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} arr
 * @returns {Object<string, number>} A frequency table where the keys are items
 *    from the given arr and the values are the amnt of times that item occurs.
 */
function frequencyTableBuilder(arr) {
    let counter = 0
    var obj = {};

    for(let i = 0; i< arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(arr[i]===arr[j]){
                counter++
            }
        }
        obj[arr[i]] = counter
        counter = 0
    }
    return obj
}
console.log(frequencyTableBuilder(arr2))

// ************************************************************


// https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

const nums1 = [1];
const expected11 = 1;

const nums2 = [5, 4, 5];
const expected22 = 4;

const nums3 = [5, 4, 3, 4, 3, 4, 5];
const expected33 = 4; // there is a pair of 4s but one 4 has no pair.

const nums4 = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expected44 = 1;

function oddOccurrencesInArray(nums) {

    let counter = 0

    for(let i = 0; i< nums.length; i++){
        for(let j = 0; j < nums.length; j++){
            if(nums[i]===nums[j]){
                counter++
            }
        }
        if(counter % 2 == 1){
            return nums[i]
        }
        counter = 0
    }
}

console.log(oddOccurrencesInArray(nums3))

