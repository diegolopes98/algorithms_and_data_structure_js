//Frequency Counter
function areThereDuplicates() {
    const frequencyObj = generateFrequency(arguments)
    console.log(Object.values(arguments))
    for(let key of Object.keys(frequencyObj)) {
        if(frequencyObj[key] > 1 ) return true
    }
    return false
}

function generateFrequency(arr){
    const frequencyObj = {}
    for(let char of Object.values(arr)) {
        if(frequencyObj.hasOwnProperty(char)) frequencyObj[char]+=1
        else frequencyObj[char] = 1
    }
    return frequencyObj
}

areThereDuplicates(1,2,3,3,2,0)
