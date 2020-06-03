const produto = new Object
produto.nome = 'Cadeira'
produto['Marca do Produto'] = 'Genérica'
produto.preco = 220

console.log(produto)
delete produto.preco
console.log(produto)

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 58,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    },

    condutores: [{
        nome: 'Junior',
        idade: 19
    }, {
        nome: 'Ana',
        idade: 42
    }],

    calcularValorSeguro: function() {
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'Av. Gigante'

console.log(carro)

delete carro.condutores
delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)       // => undefined
//console.log(carro.condutores.length) => da erro pois está tentando acessar uma característica de um atributo undefined
