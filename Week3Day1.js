/*

Acronyms
Create a function that, given a String, returns the string's Acronyms
(first letter of each word capitalized).
Do it with split first if you need toString, then try to do it wihout

pseudo Code
    1. create a function that takes in a string
    1.2**edge case** if the first character of the string is not a space
    1.2.1 take the first character and capitalize it and add it to newString
    2. Loop through string
    3. look for a space then take next character 
    4.make next character a capital letter
    5.store in a newString
    **after for loop** retrun newString

*/


const str1 = " there's no free lunch - gotta pay yer way. ";
const expected1 = "TNFL-GPYW";

const str2 = "Live from New York, it's Saturday Night!";
const expected2 = "LFNYISN";

/**
 * Turns the given str into an acronym.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string to be turned into an acronym.
 * @returns {string} The given str converted into an acronym.
 */
function acronymize(str) {
    var newString=""
    if(str[0] !== " "){
        
    }
    for (let i = 0; i<str.length; i++){
        if(str[i] === " "){
            char = str[i+1].toUpperCase()
            newString += char

        }
    }

}
acronymize(str1)
acronymize(str2)
/*****************************************************************************/

/*
    1. create a function that takes in a string
    2. make a new string
    3. Loop through string backward
    4. grab each character and store in newArray
    5.**after for loop** return newString

*/
/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

var str = "creature";
const expected = "erutaerc";

const str3 = "dog";
const expected3 = "god";

/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */

function reverseString(str){
    newString="";

    for(var i = str.length-1; i >= 0; i--)
    {
        newString += str[i];
    }
    return newString
}
console.log(reverseString(str))
/*****************************************************************************/
