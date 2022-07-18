

var test1 = "aabb"
var test2 = "baba"

function Permutation(s1, s2){
    s1.split('').sort().join('')
    s2.split('').sort().join('')
    console.log(s1)
    console.log(s2)
    if(s1.length !== s2.length) return false
    
    for(let i = 0; i < s1.length; i++){
        if(s1[i] !== s2[i]){
            return false
        }

    }

    return true;
   

}


console.log(Permutation(test1,test2))