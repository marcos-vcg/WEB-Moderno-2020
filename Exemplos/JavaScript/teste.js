const seq = {
    _num : 2,
    get num() { return this._num++ },       // LER valor de uma variável e após acionar a função // prioridade: só depois incrementa
    set num(num) {                          // 
        if (num > this._num) {
            this._num = num
        }
    }
}

console.log(seq._num)                       // 2        =>  somente mostra sem incrementar

console.log(seq.num, seq.num, seq.num)      // 2  3  4  =>  mostra e logo após incrementa

console.log(seq._num)                       // 5        =>  somente mostra sem incrementar

console.log(seq.num)                        // 5        =>  mostra e logo após incrementa

seq.num = 10                                // set      =>  setar a parti 

console.log(seq.num)                        // 6        =>  mostra e logo após incrementa 

console.log(seq._num)                       // 7        =>  somente mostra sem incrementar
console.log(seq._num)                       // 7        =>  somente mostra sem incrementar

console.log(seq.num)                        // 7        =>  mostra e logo após incrementa
console.log(seq.num)                        // 8        =>  mostra e logo após incrementa