const leapYears = function(year) {
    let risultato = year % 4===0 && (year%100!==0 || year%400===0)
//  let risultato = year %4===0 ? year%100===0 ? year%400===0 : true  : false
    return risultato
}

module.exports = leapYears
