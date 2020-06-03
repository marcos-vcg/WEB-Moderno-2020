console.log(module.exports)                        // já existe um objeto criado module.exports que é o principal
console.log(module.exports === this)               // os outros estão referenciados para adicionar a ele
console.log(module.exports === exports)            

this.a = 1
exports.b = 2
module.exports.c = 3

console.log(exports)
exports = null                                      // mas se tentarem sobrepor o objeto module.exports o seu referencial é quem muda
console.log(exports)                       
console.log(module.exports)

exports = {
    nome: 'Teste' 
}
console.log(exports)
console.log(module.exports)

exports.d = 4                                       // e passam a ter um objeto próprio não mais fazendo referência a module.exports
console.log(exports)
console.log(module.exports)

module.exports = {publico: true}                    // apenas sendo possível alterar o objeto base através de module.exports
console.log(exports)
console.log(module.exports)