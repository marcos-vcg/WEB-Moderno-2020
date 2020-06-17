const alunos = [
    {nome: 'João', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 9.2, bolsista: true},
    {nome: 'Pedro', nota: 9.8, bolsista: false},
    {nome: 'Ana', nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
todosBolsistas = alunos.map(a => a.bolsista).reduce(function(acum, bolsa){
    return acum && bolsa
})
console.log(todosBolsistas)

// Desafio 2: Algum aluno é bolsista? Arrow Function
const algumBolsista = (acum, bolsa) => acum || bolsa
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
