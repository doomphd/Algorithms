

const squareMatrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9],
  ];
  const expected1 = 2;
  
  
    //left to right diagonal: 1 + 5 + 9 = 15
    //right to left diagonal: 3 + 5 + 9 = 17
    //absolute difference = 2
  
  const squareMatrix2 = [
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
    [1, 2, 3, 4, 5],
  ];
  const expected2 = 0;
  //left to right diagonal: 1 + 2 + 3 + 4 + 5 = 15
  //right to left diagonal: 5 + 4 + 3 + 2 + 1 = 15
  //absolute difference = 0
  
  
    //given a square matrix (2d array) of integers
    // calculate the absolute difference between the sum of its diagonals
  function diagonalDifference(sqrMatrix) {
  
    let left = 0;
    let right = 0;
  
    for (let i = 0; i < sqrMatrix.length; i++) {
      for (let j = 0; j < sqrMatrix.length; j++) {
        if (i === j) {
          left += sqrMatrix[i][j]
        }
        if (i + j === sqrMatrix.length - 1){
          right += sqrMatrix[i][j]
        }
      }
    }
    return Math.abs(left - right)
  }
  
  // console.log(diagonalDifference(squareMatrix1))
  // console.log(diagonalDifference(squareMatrix2))
  
  
  function diagonalDifference2(sqrMatrix){
    let left = 0;
    let right = 0;
    let sideLength = sqrMatrix.length-1;
    for(let i=sideLength; i>=0; i--){
      left+=sqrMatrix[i][i];
      right+=sqrMatrix[i][sideLength-i];
    }
    return Math.abs(left-right);
  }
  
  // remember to run the code on Shell not console
  // console.log(diagonalDifference2(squareMatrix1))
  // console.log(diagonalDifference2(squareMatrix2))
  