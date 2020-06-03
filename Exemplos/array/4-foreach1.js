const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

// a função callback passada para um forEach recebe 3 parâmetros de cada elemento do array
// na ordem: elemento, índice, array. Não é obrigado a usar todos os parâmetros.
aprovados.forEach(function(nome, indice, array) {
    console.log(`${indice + 1}) ${nome}`)
})

// Nesse caso só pega os elementos.
aprovados.forEach(nome => console.log(nome))

// Colocou a função na variável e chamou a variável.
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)

