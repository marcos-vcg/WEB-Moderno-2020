console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)
console.log(typeof Function)

//Quebra, reverte e junta de novo um array.
String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

//Não substitua métodos preexistentes, pode causar erros catastróficos.
String.prototype.toString = function () {
    return 'Lascou tudo'
}
console.log('Escola Cod3r'.reverse())