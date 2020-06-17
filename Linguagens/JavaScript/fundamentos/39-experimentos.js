let a = 3
globalThis.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(a)
console.log(global.b)
console.log(globalThis.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

// criando uma variavel maluca: sem var ou let
abc = 3   // não faça isso em casa!!! risco de sobrescrever uma variável em contexto global
console.log(global.abc)
console.log(abc)
abc = 4
console.log(abc)

// fuja do escopo global