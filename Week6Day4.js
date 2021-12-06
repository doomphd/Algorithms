/*
  Sum To One Digit
  Implement a function sumToOne(num)​ that,
  given a number, sums that number’s digits
  repeatedly until the sum is only one digit. Return
  that final one digit result.
  Tips:
    to access digits from a number, need to convert it .toString() to access each digit via index
    parseInt(arg) returns arg parsed as an integer, or NaN if it couldn't be converted to an int
    isNaN(arg) used to check if something is NaN
*/

const num1 = 5;
const expected1 = 5;

const num2 = 10;
const expected2 = 1;
// 1 + 0 = 1

const num3 = 25;
const expected3 = 7;
// 2 + 5 = 7

const num4 = 258;
const expected4 = 6;
// 2 + 5 + 8 = 15 ; 1 + 5 = 6

// Bonus
// const num3 = -25;
// const expected3 = -7;
// 2 + 5 = -7 
// -2 + 5 = 3

/**
 * Sums the given number's digits until the number becomes one digit.
 * @param {number} num The number to sum to one digit.
 * @returns {number} One digit.
 */
 function sumToOneDigit(num) {
  // pseudo
  // parse into a string
  // base case: string is one char
  //              convert string to int
  //              return one digit int
  // recursive case: get first char then add it to sumToOneDigit(string.slice(1))

  var numString = num.toString();

  if (numString.length <= 1) {                                                        // Base Caase
    num = parseInt(numString,0)
    return num;
  }
  
  var firstNum = parseInt(numString[0],0);                                            // Recursive Case
  var sumString = sumToOneDigit(firstNum) + sumToOneDigit( numString.slice(1) );
  return  sumToOneDigit(sumString);
}

// ********************************


// http://algorithms.dojo.news/static/Algorithms/index.html#LinkTarget_2129
/* 
  String Anagrams
  Given a string,
  return array where each element is a string representing a different anagram (a different sequence of the letters in that string).
  Ok to use built in methods
*/

const two_str1 = "lim";
const two_expected1 = ["ilm", "iml", "lim", "lmi", "mil", "mli"];
// Order of the output array does not matter

/**
 * Add params if needed for recursion.
 * Generates all anagrams of the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {Array<string>} All anagrams of the given str.
 */
function generateAnagrams(str) {
  if (str.length ===1)
  {
    return [str]
  }
  output = []
  for (char in str)
  {
    rest = ''
    for (x in str)
    {
      if (x != char)
      {
        rest += x
      
      }
    }
    perms = generateAnagrams(rest)
    for (perm in perms)
    {
      output.push(char+perm)
    }
  }
  return output
}
console.log(generateAnagrams('lim'))
