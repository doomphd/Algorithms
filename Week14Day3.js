
/* 
Given to alumni by Riot games in 2021.
*/

const str100 = "b70a164c32a20c10"; // b:70 a:164 c:32 a:20 c:10
const expected100 = "a184b70c42"; //a:184 b:70 c:42
//70

  //given an incorrectly string by combining letter count occurences
  // return the correctly rehashed string alphabetized.
function rehash(s) {

    var obj = {}
    var string = ""
    var key = ""
    for(let i = 0; i < s.length; i++){
        if(isNaN(s[i])){
            key = s[i]
           // console.log(s[i])
           var number = parseInt(string)
            // if (!obj.hasOwnProperty(s[i])){
            //     obj[s[i]] = new Array()
            // }
            obj[key] = number;
            string = ""
            
        }
        else{
            string += s[i];
        }
        // if(obj.hasOwnProperty(key)){
        //     obj[key] += parseInt(string)
        // }
        // else{
        //     obj[key] = parseInt(string)
        // }
    }


return obj
}
console.log(rehash(str100))

// HINTS: isNaN(num) , parseInt(str)





   
// BONUS  -- longest substring without repeating characters


const str1 = "abcabcbb";
const expected1 = 3;
// Explanation: The answer is "abc", with the length of 3.

const str2 = "bbbbb";
const expected2 = 1;
// Explanation: The answer is "b", with the length of 1.

const str3 = "pwwkew";
const expected3 = 3;
/* Explanation: The answer is "wke", with the length of 3. 
  Note that the answer must be a substring, "pwke" is a subsequence and not a substring. */

const str4 = "dvadf"; 
const expected4 = 4;
// Explanation: "vadf"

//Given a string, find the length of the longest substring without repeating characters.
function lengthOfLongestSubString(str) {}