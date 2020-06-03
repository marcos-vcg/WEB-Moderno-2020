const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => { 
    console.log(`${e[0]}: ${e[1]}`)  
})

Object.entries(pessoa).forEach(([chave, valor]) => {        // desestruturação
    console.log(`${chave}: ${valor}`)  
})

Object.defineProperty(pessoa, 'dataNascimento', {      // mais código, porém bem mais controle sobre o código
    enumerable: false,
    writable: false,              // congela (como se fosse o FREEZE) essa variável apenas, e não o objeto inteiro
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)

console.log(pessoa)                            // não enumera, mas continua existindo
console.log(pessoa.dataNascimento)


//Object.assign (ECMAScript 2015)
const dest = {a:1}
const o1 = {b:2}
const o2 = {c:3, a:4}
const obj = Object.assign(dest, o1, o2)     // concatena todos os objetos adicionados ao primeiro que será o destino
console.log(dest)                           // caso se repita algum o último se sobressai e sobrescreve o anterior

Object.freeze(obj)              // congela o objeto inteiro
obj.c = 1234

console.log(obj)
