const sumAll = function(start, finish) {
    let finalResult = new Number
    let i = Math.min(start,finish)
    
    if (typeof(start) === 'number' && typeof(finish) === 'number'  && i>=0) {
        while (i <= Math.max(start,finish)){
            finalResult+=i
            i++        
        }
    } else finalResult = 'ERROR'
    return finalResult

}

module.exports = sumAll
