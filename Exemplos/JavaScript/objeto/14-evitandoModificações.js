// Object.preventExtensions 
// não permite acrescentar atributos, apenas modificar ou deletar
// Já cria o ojjeto com as propriedades depois não da pra acrescentar novas.
const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'BBorracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
// Não consegue nem adicionar nem excluir novos elementos no objeto
// Apenas consegue editar os elementos.
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + Valores constantes
// Object.freeze = Object.seal + Writable (false)
// Nem consegue acrescentar ou excluir, como também não consegue editar