{ 
    { 
        { 
            { 
                var sera = 'Será???'    // VAR GLOBAL - É visível mesmo fora do bloco (EVITAR)
                console.log(sera)
            } 
        } 
    } 
}
console.log(sera)

function teste() {
    var local = 123          // VAR no escopo de FUNÇÃO - Só é visível dentro da função
    console.log(local)
}

teste()
// console.log(local)
