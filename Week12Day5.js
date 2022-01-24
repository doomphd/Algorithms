const riverLevels1 = [15, 17, 30];
const expected1 = 15; // 30 - 15 = 15

const riverLevels2 = [15, 17, 30, 14, 5, 16, 25, 9, 3];
const expected2 = 20; // 25 - 5 = 20

const riverLevels3 = [21, 18, 10, 11, 14, 9, 5, 13, 15, 7, 1, 6, 12, 4];
const expected3 = 11; // 12 - 1 = 11

const riverLevels4 = [1, 5];
const expected4 = 4;

const riverLevels5 = [5, 1];
const expected5 = -1;

const riverLevels6 = [9, 7, 7, 7];
const expected6 = -1;

const riverLevels7 = [42];
const expected7 = -1;

function measureWaterLevels4(waterLevels) {
    let maxRise=0;
    let i = 0;
    while(i<waterLevels.length){
        let currentRise=0;
        while(waterLevels[i+1]<waterLevels[i]){
            i++;
        }
        while(waterLevels[i+1]>waterLevels[i]){
            currentRise += waterLevels[i+1]-waterLevels[i];
            i++;
        }
        currentRise > maxRise && (maxRise=currentRise);
        i++;
    }
    return maxRise>0 ? maxRise : -1
}



function measureWaterLevels5(waterLevels) {
//Find the largest rise in water levels during a day
    let maxDiff = -1;
    let min = waterLevels[0];
    for (let i = 0; i < waterLevels.length; i++){
        if(waterLevels[i] > min && maxDiff < waterLevels[i] - min){ 
          console.log(waterLevels[i])
            maxDiff = waterLevels[i] - min;
        }
        if(waterLevels[i] < min){
            min = waterLevels[i];
        }
    }
    return maxDiff
}