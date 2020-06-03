function teste1(num) {
    if (num > 7) 
        console.log(num)        // chave opcional c/ apenas uma linha de código
    
    console.log('Final')
}

teste1(6)
teste1(8)

function teste2(num) {       // codigo errado
    if (num > 7); {         // cuidado com ';' não usar com as estruturas de controle
        console.log(num)     // o ';' está separando o restante em, uma nova linha de código
    }
}

teste2(6)
teste2(8)