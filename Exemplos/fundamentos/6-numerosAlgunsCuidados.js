console.log(7 / 0)
console.log("10" / 2)    
console.log("10" + 2)    // Ele vai concatenar pois o + faz sentido com string 10+2=102 
console.log("10" - 2)    // Como não faz sentido usar string ele converte pra numero e resolve
console.log("Show!" * 2)

const a = 0.1
const b = 0.7
const c = (a + b)
console.log(c)  // especificação de ponto flutuante IEEE não muito precisa, porém rápida

const d = a * 10
const e = b * 10

const f = (d + e)/10
console.log(f)

//console.log(10.toString())
console.log((10.345).toString())
console.log((10.345).toString(2))
console.log((10.345).toFixed())
console.log((10.345).toFixed(2))
