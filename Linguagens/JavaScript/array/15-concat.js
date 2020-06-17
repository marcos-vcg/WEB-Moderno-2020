// Concat cria um novo Array que concatena/junta outros arrays ou elementos nele.
const filhas = ['Ualeskah', 'Cibalena']
const filhos = ['Uoxiton', 'Uesclei']
const todos = filhas.concat(filhos)
console.log(todos, filhas, filhos)

// Pode utilizar a notação literal de Array que ainda é um objeto.
console.log([].concat([1, 2], [3, 4], 5, [[6, 7]]))