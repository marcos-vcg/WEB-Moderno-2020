const [a, b, c, d] = [3, 5, 1, 15]
// a - b  // operador infixo, binario, entre dois numeros
// ++a // operador prefixado
// a++ // operador post fixed
// -a  // operador unário        // ternário
const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2  // pega o resto da divisão, usado pra saber se o resto é zero então é par, se o resto é 1 então é impar

console.log(soma, subtracao, multiplicacao, divisao, modulo)
console.log(soma, subtracao, multiplicacao, -divisao, modulo)