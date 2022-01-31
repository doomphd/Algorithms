const people = [
    { firstName: "John", lastName: "Doe"},
    { firstName: "Jane", lastName: "Doe"},
    {firstName: "Eddy", lastName: "Lee"},
    {firstName: "John", lastName: "Fawn"},
    {firstName: "Edward", lastName: "Kim"}
  ];
  
  const searchFor1 = "Jo";
  const searchBy1 = "firstName";
  const expected1 = [
    { firstName: "John", lastName: "Doe"},
    {firstName: "John", lastName: "Fawn"},
  ];
  
  const searchFor2 = "ohn";
  const searchBy2 = "firstName";
  const expected2 = [];
  // Explanation: "John" contains "ohn", it does not start with "ohn"
  
  const searchFor3 = "Do";
  const searchBy3 = "lastName";
  const expected3 = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
  ];
  
  // Bonus
  const searchFor4 = "E";
  const searchBy4 = "lastName";
  const searchMethod4 = "includes"; 
  const expected4 = [
    {firstName: "John", lastName: "Doe"},
    {firstName: "Jane", lastName: "Doe"},
    {firstName: "Eddy", lastName: "Lee"},
  ];
  
  function filterByKeyStartsWith(items, searchFor, searchBy) {
   let match =true
    let newArr= []
    for (const item of items){
      let match= true
      if(item.hasOwnProperty(searchBy)){
        for (let i=0; i<searchFor.length; i++) {
          if (item[searchBy][i] !== searchFor[i]){
            match = false
          }
        }  
      }
      if (match === true){
          newArr.push(item)
        }
    }
    return newArr
  }
  
  
  console.log(filterByKeyStartsWith(people, searchFor1, searchBy1))
  console.log(filterByKeyStartsWith(people, searchFor2, searchBy2))
  console.log(filterByKeyStartsWith(people, searchFor3, searchBy3))
  
  function filterByKeyStartsWithSlice(items, searchFor, searchBy) {
   // Filters the given items based on the search criteria using a startsWith
   // searchBy : key.  searchFor : value to search
    let newArr= []
    for (const item of items){
      if(item.hasOwnProperty(searchBy)){
        if(item[searchBy].slice(0,searchFor.length) === searchFor){
          newArr.push(item)
          }
        }
      }
      return newArr
    }  