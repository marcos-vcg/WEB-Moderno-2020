const pessoa = {             // objeto pessoa
    saudacao: 'Bom dia!',
    falar() {               // função
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar     // conflito de paradigmas: funcional e OO
falar()

const falarDePessoa = pessoa.falar.bind(pessoa)   // bind garante que a função aponte para o determinado objeto
falarDePessoa()