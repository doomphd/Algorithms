/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstringTwoDistinct = function(s) {
    
    var i = 0;
    var j = 0;
    var obj = {}
    var count = 0
    var maxCount = 0;

    while(j < s.length){
        obj[s[j]] = true

        if(Object.keys(obj).length > 2){
            count = 0
            obj = {}
     
                i++
                j = i     

        }
        else{
        j++
        count++
        maxCount = Math.max(maxCount, count)
        }
    }
    return maxCount
    
};