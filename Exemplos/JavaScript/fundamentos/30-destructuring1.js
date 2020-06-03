const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

console.log(pessoa)
//const { nome } = pessoa    
//console.log(nome)

const { nome, idade } = pessoa        // const nome/idade de pessoa é ana/5
console.log(nome, idade)
console.log(nome)
console.log(idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada)

const { endereco: { logradouro, numero, cep }} = pessoa        //estrai de pessoa olhando dentro de endereço
console.log(logradouro, numero, cep)

const { conta: { ag, num }} = pessoa // precisa acessar um atributo válido mesmo que dentro dele não exista a busca
console.log(ag, num)  // não consegue desestruturar um dado de uma estrutura que não exista
