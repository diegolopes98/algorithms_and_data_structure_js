function sameFrequency(num1, num2) {
    const str1 = num1.toString(10)
    const str2 = num2.toString(10)
    if(str1.length !== str2.length) return false;
    const frequencyObj1 = countChars(str1)
    for(let i = 0; i < str2.length; i++) {
        const checkNum = str2[i]
        if(!frequencyObj1[checkNum]) return false
        else frequencyObj1[checkNum]-=1 
    }
    return true
}

function countChars(str){
    const frequencyObj = {}
    for(let char of str) {
        if(frequencyObj.hasOwnProperty(char)) frequencyObj[char]+=1
        else frequencyObj[char] = 1
    }
    return frequencyObj
}