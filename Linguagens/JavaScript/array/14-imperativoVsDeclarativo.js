const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2}
]

// Imperativo
// Você assume as responsabilidades de determinar como o código vai executar seu comando.
// Código não reutilizavel.
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
console.log(total1/alunos.length)

// Declarativo
// Você não está preocupado em como o código vai executar, só quer o resultado final.
// Código fica reutilizável.
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
total2 = alunos.map(getNota).reduce(soma)
console.log(total2/alunos.length)