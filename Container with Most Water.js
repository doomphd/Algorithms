/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    
    let max = 0
    let right = height.length -1 
    let left = 0 
    while(left < right ){
        
        max = Math.max(max, Math.min(height[right],height[left]) * (right-left) )
        
        if(height[left] < height[right]){
            left++
        }
        else{
            right--
        }
    }
    
    return max
};