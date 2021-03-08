const removeFromArray = function(...userInput) {
    let arrayToProcess = userInput[0]

    //Metodo 3

    let arrayOutput = arrayToProcess.filter(element => !userInput.includes(element))

    // Metodo 2

    //let arrayOutput = []
    /* arrayToProcess.forEach(elementToInclude=>{
        if (!userInput.includes(elementToInclude)){
            arrayOutput.push(elementToInclude);
        }
    }) */
    // Metodo 1
    /* 
    Richiede un secondo parametro
    for (let i=0; i<userInput.length; i++){

        let index = arrayToProcess.indexOf(userInput[i])
        if (index >= 0) arrayToProcess.splice(index,1)

    }
    */
    return arrayOutput
}

module.exports = removeFromArray
