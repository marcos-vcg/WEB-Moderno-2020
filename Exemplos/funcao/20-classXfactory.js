const criarPessoa = nome => {
    return {
        falar : () => console.log(`Meu nome é ${nome}!`)
    }
}

const p1 = criarPessoa('Fernando')
p1.falar()


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