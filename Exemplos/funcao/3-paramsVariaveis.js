function soma () {
    let soma = 0
    for (i in arguments)  {         // ARGUMENTS (é um array)= recuperar parâmetros não declarados na construção da função
        soma += arguments[i]        // ATRIBUIÇÃO ADITIVA += vai pegar cada argumento e somar
    } 
    return soma
}

console.log(soma())
console.log(soma(1))
console.log(soma(1.1, 2.2, 3.3))

// pode criar alguma aberração que não é interessante
console.log(soma(1.1, 2.2, "Teste"))    // ponto flutuante
console.log(soma('a', 'b', 'c'))        // soma começa em 0 e depois concatena com o texto

// o ideal é usar o operador = "REST/SPREAD"