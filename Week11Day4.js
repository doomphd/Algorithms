function merge2(arr1, arr2){
  let newArr = []
  let i=0;
  let j=0;
  while(i<arr1.length && j<arr2.length){
    if(arr1[i] < arr2[j]){
      newArr.push(arr1[i]);
      i++;
    }
    else{
      newArr.push(arr2[j]);
      j++;
    }
  }
  // if(i<arr1.length){
  //   for(let k=i; k<arr1.length; k++){
  //     newArr.push(arr1[k]);
  //   }
  // }
  // if(j<arr2.length){
  //   for(let k=j; k<arr2.length; k++){
  //     newArr.push(arr2[k]);
  //   }
  // }
  while(i<arr1.length){
    newArr.push(arr1[i]);
    i++;
  }
  while(j<arr2.length){
    newArr.push(arr2[j]);
    j++;
  }
  
  return newArr;
}
// console.log(merge2(sortedA3, sortedB3))



function merge(arr1, arr2){
  let newArr1 = [...arr1];
  let newArr2 = [...arr2];
  let arr = [];
  while (newArr1.length || newArr2.length) {
    if (newArr1[0] < newArr2[0]){
      arr.push(newArr1.shift())
    } else {
      arr.push(newArr2.shift())
    }
  }
  return arr
}