const prod1 = {}   //coleção de pares chave/valor   pode criar coleções denro de outras coleções
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['Desconto Legal'] = 0.40   //evitar atributos com espaço

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90
}

console.log(prod2)

console.log(typeof prod1)     // um OBJETO pode conter funções, strings, arrays, numbers...
console.log(typeof prod1.nome)
console.log(typeof prod1.preco)
console.log(typeof prod1['Desconto Legal'])

// JSON JavaScript Object Notation
// '{ "nome": "Camisa Polo", "preco": 79.90 }'
// usado para troca de informações entre sistemas
// texto, não é objeto