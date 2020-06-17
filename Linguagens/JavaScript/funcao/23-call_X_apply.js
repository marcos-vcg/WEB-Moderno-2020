function getPreco (imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc)*(1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco: 4589,
    desc: 0.15,
    getPreco              // se não estiver chamado dentro da erro no comando => console.log(produto.getPreco())
}

global.preco = 20
global.desc = 0.1

console.log(getPreco)                // getPreço => mostra o que é
console.log(getPreco())              // getPreco => aplicada ao escopo global
console.log(produto.getPreco())      // getPreço => aplicada ao objeto produto


const carro = { preco: 49990 , desc: 0.20 }
console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))
                                                     // função.call/apply(objeto, depois os parâmetros)
console.log(getPreco.call(carro, 0.2, '$'))          // aplicando novos parâmetros a função getPreco (imposto e moeda)
console.log(getPreco.apply(carro, [0.2, '$']))       // aplicando novos parâmetros a função getPreco (imposto e moeda) - em forma de array

console.log(getPreco.apply(global, [0.2, '$']))
