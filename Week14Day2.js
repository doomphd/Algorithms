//------------ Grouping Categories ---------
const objects = [
    {
      name: "Receving red packets",
      category: "fun",
    },
    {
      name: "Turnip Cake",
      category: "yummy",
    },
    {
      name: "Having never-ending feasts",
      category: "fun",
    },
    {
      name: "Everyone asks you for money",
      category: "Not fun",
    },
    {
      name: "Rice Cake",
      category: "yummy",
    },
    {
      name: "Ate too much unhealthy food",
      category: "Not fun",
    },
  ];
  
  
  const expected = {
    fun: [
      {
        name: "Receving red packets",
        category: "fun",
      },
      {
        name: "Having never-ending feasts",
        category: "fun",
      },
    ],
    yummy: [
      {
        name: "Rice Cake",
        category: "yummy",
      },
      {
        name: "Turnip Cake",
        category: "yummy",
      },
    ],
    "Not fun": [
      {
        name: "Ate too much unhealthy food",
        category: "Not fun",
      },
      {
        name: "Everyone asks you for money",
        category: "Not fun",
      },
    ],
  };
  
  
  /* 
  Given an array of objects that contain a category key,
  return a hash table to group the objects by their category.
  Make the grouping case-insensitive.
  Bonus: allow the key that is grouped by to be provided.
  */
  // create freq table to grab each unique categoy
  // turn each key into a list of objects that only have to same category as the kay
  
  

  function groupObjects(items) {
    return items.reduce((hash, value) => {
        if (!hash[value.category]) {
          hash[value.category] = [];
        }
        hash[value.category].push(value);
      
        return hash;
      }, {});
  }
  console.log(groupObjects(objects))
  
  //------------ backspace string compare---------



const S1 = "ab#c"; // ac
const T1 = "ad#c"; //ac
const expected1 = true;
// Explanation: Both S and T become "ac"

const S2 = "ab##"; //""
const T2 = "c#d#"; //""
const expected2 = true;
// Explanation: Both S and T become ""

const S3 = "a##c"; //"c"
const T3 = "#a#c"; //"c"
const expected3 = true;
// Explanation: Both S and T become "c"

const S4 = "a#c"; //c
const T4 = "b"; //b
const expected4 = false;
// Explanation: S becomes "c" while T becomes "b".

/* 
  Given two strings S and T containing only lowercase letters and "#" characters,
  return if they are equal when both are typed into empty text editors.
  # character means a backspace character.
  i.e., after processing the backspaces, are the two strings equal?
  Bonus: solve in O(n) time
*/
function backspaceStringCompare(S, T) {
  let sArr = []
  let tArr = []
  for(let i = 0; i < S.length; i++){
    if(S[i] === "#"){
      sArr.pop()
    }else{
      sArr.push(S[i]);
    }
    if(T[i] === "#"){
      tArr.pop()
    }else{
      tArr.push(T[i]);
    }
    
  }
  return sArr.join()==tArr.join()

}