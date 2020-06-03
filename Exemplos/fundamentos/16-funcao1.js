// Função sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2)           // number + undefined = NaN Not a Number
imprimirSoma(2, 3, 4, 5)
imprimirSoma()

// Função com retorno
function soma(a, b = 0) {     // Valor padrão quando não receber nenhum valor
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))
