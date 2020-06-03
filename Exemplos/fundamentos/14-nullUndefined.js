let valor           
console.log(valor)     // [UNDEFINED] = [DECLARADA] (NÃO INICIALIZADA) ainda não definido (valor, tipo)
// console.log(valor2) => [ITS NOT DEFINED] = [NÃO DECLARADA] (não existe) nenhum (endereço / valor, tipo)
// let test = valor    => não havia estrutura em (valor), logo não atribui mesma referencia a (test). Portanto alterações em (test) não alteram (valor)

valor = null         // [VAZIA] = [DECLARADA] (INICIALIZADA) ausência de endereço de memória - Sempre use o [NULL], nunca [UNDEFINED]
console.log(valor)   // opte pelo null sempre que for zerar o valor de uma variável

let valor2 = valor           
console.log(valor, valor2)  
valor2 = {nome: 'eu'}          
console.log(valor, valor2)  

//console.log(valor.toString()) // Error: Cannot read property 'toString' of null

console.log("")

const produto = {}
console.log(produto)
console.log(produto.preco)
produto.preco = 3.50
console.log(produto)
console.log(produto.preco)
produto.preco = undefined  // evite atribuir undefined
console.log(produto)
console.log(produto.preco)
console.log(!!produto.preco)
// delete produto.preco  //tirar um atributo de um objeto
console.log(produto)

console.log("")

produto.preco = null // sem preço não é um preço de ZERO reais, é um valor não definido ainda.
console.log(produto)
console.log(produto.preco)
console.log(!!produto.preco)
