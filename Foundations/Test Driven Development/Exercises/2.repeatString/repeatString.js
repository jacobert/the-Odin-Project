const repeatString = function(stringaInput, volte) {
    let stringaOutput = ''
    if (volte < 0){
        stringaOutput = 'ERROR'
    }
    for (let i=0; i<volte; i++){
        stringaOutput+=stringaInput
    }
    return stringaOutput
   
    
}

module.exports = repeatString
