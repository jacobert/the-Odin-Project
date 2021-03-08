const ctof = function(celsiusDeg) {
  return Math.round((celsiusDeg*9/5+32)*10)/10

  }

const ftoc = function(fahreneitDeg) {
  return Math.round(((fahreneitDeg-32)*5/9)*10)/10
}

 

module.exports = {
  ctof,
  ftoc
}
