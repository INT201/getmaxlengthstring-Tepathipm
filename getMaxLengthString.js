const { template } = require('@babel/core')

function getMaxLengthString(arrayOfString) {
    if (arrayOfString == null || arrayOfString==undefined){
        return undefined
    } else {
        let word=[]
     for (let i = 0; i < arrayOfString.length; i++) {
      if (word.length < arrayOfString[i].length) {
        word[i] = arrayOfString[i];
      }
    }
    return word;
}
}

module.exports = getMaxLengthString
