const imprimirResultado = function (nota) {
    switch (Math.floor(nota)) {              // valor passado ao switch é um número, não um boleano(V, F)
        case 10:
        case 9:
            console.log('Quadro de Honra')
            break                               //se não tiver o break ele sai executando todos os outros abaixo
        case 8: case 7:
            console.log('Aprovado')
            break
        case 6: case 5: case 4:
            console.log('Recuperação')
            break
        case 3: case 2: case 1: case 0:
            console.log('Reprovado')
            break
        default:                                //como se fosse o else, se não entrou em nenhum outro caso
            console.log('Nota Inválida')
    }
    console.log('')                             //executa pra todos os case
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2,3)
imprimirResultado(-1)
imprimirResultado(11)