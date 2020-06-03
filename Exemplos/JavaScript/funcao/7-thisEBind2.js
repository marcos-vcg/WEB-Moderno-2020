function Pessoa() {
    this.idade = 0
    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }/*.bind(this)*/, 1000)          // a cada mili segundos, resolução blind para this(cravar o valor nesse contexto)
}

new Pessoa

/*
function Pessoa() {
    this.idade = 0
    const self = this              // constante para cravar o valor do this nesse contexto
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)                    // a cada mili segundos
}

new Pessoa
*/