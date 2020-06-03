class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    falar() {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p2 = new Pessoa('João')
p2.falar()


function Pessoa(nome) {
    this.nome = nome
    
    this.falar = function () {
        console.log(`Meu nome é ${this.nome}!`)
    }
}

const p2 = new Pessoa('João')
p2.falar()