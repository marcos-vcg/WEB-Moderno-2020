function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min  
    return Math.floor(valor)
}

let opcao = 0        // se começar com -1 já para

while (opcao != -1) {                               // laços com quantidade indeterminada de repetições, 
    opcao = getInteiroAleatorioEntre(-1, 10)        // enquanto for verdadeiro continua indeterminadamente
    console.log(`Opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima!')
