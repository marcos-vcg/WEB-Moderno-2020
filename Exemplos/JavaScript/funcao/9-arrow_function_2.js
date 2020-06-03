function Pessoa () {
    this.idade = 0

    setInterval(() => {
        this.idade++                         // this não varia dentro de uma função arrow function
        console.log(this.idade)
    }, 1000);
}

new Pessoa
