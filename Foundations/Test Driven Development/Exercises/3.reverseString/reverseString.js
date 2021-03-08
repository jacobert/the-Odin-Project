const reverseString = function(userWord) {
    let reversed = userWord.split('').reverse().join('')
    return reversed
}

module.exports = reverseString
