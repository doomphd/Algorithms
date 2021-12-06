/* 
  Given a string,
  return a new string with the duplicates excluded
  Bonus: Keep only the LAST instance of each character.
*/

const str1 = "abcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str21 = "heloloo";
const expected21 = "helo";

// bonus
const str3 = "hellool";
const expected3 = "heol";

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
    function stringDedupe(str) {
        var results = ""
        for (var i = str.length-1; i >= 0; i--){
            if (results.includes(str[i])){
                continue
            }
            else{
                results = str[i] + results
            }
        }
        return results
    }
    console.log(stringDedupe(str2))
    console.log(stringDedupe(str21))
    console.log(stringDedupe(str3))

// ***********************************************

/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const two_str1 = "hello";
const two_expected1 = "olleh";

const two_str2 = "hello world";
const two_expected2 = "olleh dlrow";

const two_str3 = "abc def ghi";
const two_expected3 = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
// Uses .reverse()
// function reverseWords(str) {
//     var newString = ""
//     var output = ""
//     for(let i = 0; i < str.length; i++){
//         if( str[i] === " "){
//             output += newString.split("").reverse().join("") + " "
//             newString = ""
//         }
//         else{
//             newString += str[i]
//         }
//     }
//     output += newString.split("").reverse().join("")

//     return output
// }

function reverseWords(str) {
    let words = str.split(" ")
    let wordsRevesed = ""
    for (const word of words){
        let reversedWord = ""

        for (let i = word.length - 1; i>=0; i--){
            reversedWord += word[i]
        }

        if (wordsRevesed.length > 0){
            reversedWord = " " + reversedWord
        }
        wordsRevesed += reversedWord
    } 
    return wordsRevesed
}

console.log(reverseWords(two_str3))

