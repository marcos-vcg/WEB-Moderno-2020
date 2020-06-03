// Função em JS é FIrst-Class Object (Citizens)
// Higher-order function

// criar de forma literal
function fun1() { }   // chaves obrigatórias

// Srmazenar em uma variável
const fun2 = function () { }       // para invocar uma função precisa colocar os parentesis: (fun2)

// Armazenar em um array
const array = [function(a, b) { return a + b }, fun1, fun2]    // sintaxe válida
console.log(array[0](2, 3))

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'Opa' }
console.log(obj.falar())

// Passar função como param
function run(fun) {
    fun()
}

run(function () { console.log('Executando...') })

// Uma função pode retornar ou conter uma função
function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(2,3)(4)
const cincoMais = soma(2, 3)
cincoMais(4)
