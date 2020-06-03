// pessoa -> endereço1 -> {...}
const pessoa = {nome: 'João'}        // mesmo sendo constante é permitido alterar os valores dentro do atributo já criado
pessoa.nome = 'Pedro'                // constante é a variável pessoa no endereço já determinado
console.log(pessoa)

// pessoa -> endereço2 -> {...}        outro objeto em outro endereço, não pode por ser constante
// pessoa = {nome: 'Ana'}              isso se trataria de uma nova variável em um novo endereço com novos dados

Object.freeze(pessoa)       // Congela o objeto e não é mais possível alterar nenhum valor dentro dele, nem mesmo excluir ele

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})     // já nasce o objeto congelado

