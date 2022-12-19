const fs = require('fs')
function getFirstWord(item) {
    const text = JSON.parse(fs.readFileSync(`${item}`))
    const firstWord = text.split(' ')[0]
    console.log(firstWord)
}

function getLastWord(item) {
    const text = JSON.parse(fs.readFileSync(`${item}`))
    const textArr = text.split(' ')
    const lastWord = textArr[textArr.length - 1]
    console.log(lastWord)
}

module.exports = {
    getFirstWord, 
    getLastWord
}


