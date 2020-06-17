const sequencia = {
    _valor: 1,                              // CONVENÇÃO -> Pretende-se usar esta variável apenas internamente dentro desse objeto
    get valor() {return this._valor++},     // LER valor de uma variável e após acionar a função // prioridade: só depois incrementa
    set valor(valor) {                      // SETAR um novo valor a partir do objeto.atributo = algo
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor)                // Primeiro apresenta o valor só depois incrementa
console.log(sequencia.valor)

sequencia.valor = 11
console.log(sequencia.valor)
console.log(sequencia.valor)

sequencia.valor = 1
console.log(sequencia.valor)
console.log(sequencia.valor)
