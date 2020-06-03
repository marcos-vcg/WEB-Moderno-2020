function rand({ min = 0, max = 1000}) {    // destructuring para pegar os valores do objeto com valores parâmetros padrão se não tiver definido
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = {max: 50, min: 40}
console.log(rand(obj))
console.log(rand({max: 100}))
// console.log(rand())   // da erro - correção console.log(rand({})) 

// testando o passo a passo

const teste = Math.random()   // função aleatório de 0 a 1 todos os decimais
console.log(teste)

const teste2 = teste * 10   // retornar valores proporcionais ao intervalo 10 | entre 40 e 50 = 50 - 40 = 10
console.log(teste2)

const teste3 = Math.floor(teste2)   // arredondar os valores pra os inteiros pra baixo 
console.log(teste3)

