const nums = [1, 2, 3, 4, 5]

// for com um propósito
// recebe uma callback function com até 3 argumentos, valor, indice, array
let resultado = nums.map(function(e) {
    return e * 2
})

console.log(nums, resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

// parseFloat() => transforma uma string para um número flutuante ou inteiro(parseInt())
// toFixed(a) => Fixa em "a" casas decimais
// replace(a, b) => Substitui todos os "a" por "b"