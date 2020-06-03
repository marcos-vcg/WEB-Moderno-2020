function criarProduto1(nome, preco) {
    return {
        Produto: nome,
        Valor: preco 
    }
}

console.log(criarProduto1('Arroz', 2.40))



function criarProduto2(nome, preco) {
    return {
        nome,
        preco 
    }
}

console.log(criarProduto2('Feijão', 3.30))
