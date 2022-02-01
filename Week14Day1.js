// ---------- palindrome -----------

const str1 = "";
// expected1 = false;

const str2 = "a";
// expected2 = true;

const str3 = "ddaa"; //
// expected3 = true;
// Explanation: "daad" or "adda"

const str4 = "dda";
// expected4 = true;
// Explanation: "dad"

const str5 = "aaadd";
// expected5 = true;
// Explanation: "daaad" "adada"

const str6 = "abc";
// expected6 = false;


// Given an unordered string
//return whether or not it's possible to make a palindrome out of the string's characters.
function canStringBecomePalindrome(str) {
 let freq = {};
 let i = "";
let odds = 0

  for(i=0;i<str.length;i++){
    if(!freq[str[i]]){
      freq[str[i]]=1;
    }else{
      freq[str[i]]++;
    }
  }
  for(letter in freq){
    if(freq[letter] % 2 !== 0){
      odds++
    }
  }

  if(str.length % 2===0 && odds > 0){
    return false
  }else if (str.length%2===1 && odds!==1) {
    return false
  }else{
    return true
  } 

}


console.log(canStringBecomePalindrome(str6))
// -----------DROP IT ---------------

const nums1 = [1, 4, 3, 6, 9, 15];
const callback1 = (elem) => {
  return elem > 5
};
// expected1 = [6, 9, 15];

const nums2 = [...nums1];
const callback2 = (elem) => {
  return elem > 2;
};
// expected2 = [4, 3, 6, 9, 15];

const nums3 = [...nums1];
const callback3 = (elem) => false;
// expected3 = [];

/*
  Input: arr, callback
  Output: arr (with elements removed)
  Remove every element in the array, starting from idx 0,
  until the callback function returns true when passed the
  iterated element.
  Return an empty array if the callback never returns true
*/

function dropIt(arr, callbackFunc) {
  newArr=[]
  for(let i=0; i<arr.length; i++){
    if (callbackFunc(arr[i])===true){
      newArr.push(arr[i])
    }
  }
  return newArr

}

console.log(dropIt(nums1,callback3))