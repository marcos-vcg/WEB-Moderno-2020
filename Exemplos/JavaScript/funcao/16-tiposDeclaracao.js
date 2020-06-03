// function declaration
console.log(soma(3, 4))   // interpretador javascript primeiro carrega as funções e as deixa preparadas depois executa os códigos

function soma(x, y) {
    return x + y
}

// funtion expression
const sub = function(x, y) {
    return x - y
}
console.log(sub(3, 4))

// named function expression
const mult = function mult(x, y) {
    return x * y
}
console.log(mult(3, 4))