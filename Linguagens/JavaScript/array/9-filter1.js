const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

// Retorna um Array com alguns elementos de outro Array que satisfaçam a uma determinada condição. 
// return tem a condição de retorno
console.log(produtos.filter(function(p) {
    return p.preco > 2500
}))


// Pode usar função normal ou Arrow Function e as duas aninhadas. EX caro e frágil.
const caro = function(p) {
    return p.preco >= 500
}
const fragil = prod => prod.fragil
console.log(produtos.filter(caro).filter(fragil))