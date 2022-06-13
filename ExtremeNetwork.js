// Input: [2,1,4,7,3,2,5]
// Output: 5

// Input : [4,3,2,3,6,8,10,7,5,6, 1,4,7,3,2,7]
// Output : 7

var input = [2,1,4,7,3,2,5]

var maxT = 0;
var peakReached = false;
var count = 0;


for(let i = 0; i < input.length-1; i++){

    if(peakReached === false){
        if(input[i] > input[i+1]){
            peakReached = true;
        }
        count++
    }
    if(peakReached === true){
        if(input[i] < input[i+1]){
            peakReached = false;
            count++
            maxT = Math.max(count, maxT)
            count = 0

        }
        else{
        count++
        }
    }

}
console.log(maxT)