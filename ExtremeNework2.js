var input = "Joseph Robinette Biden Jr. is an American politician who is the 46th and current president of the United States. A member of the Democratic Party, he served as the 47th vice president from 2009 to 2017 under Barack Obama and represented Delaware in the United States Senate from 1973 to 2009."


var message = ""

while(input.length >= 0){
    for(let i = 0; i < 160; i++){

        if(input[i] === " "){
            for(let j = i; j < 160; j++){
                var temp = j
                temp++
                if(input[temp] === " " && temp <= 160){
                    break;
                }
                if(temp >= 160){
                    console.log(message)
                    message = ""
                   //delete i count of words so far 
            }
        }


    }
    message += input[i]
}
}