Number.prototype.entre = function (inicio, fim) {         // função criada para ser usada junto com a nota
    return this >= inicio && this <= fim         // retorna verdadeiro se o this estiver entre esses dois valores
}

const imprimirResultado = function (nota) {
    if (nota.entre(9, 10)) {                      // criei varios intervalos para analisar se o valor da nota se encontra nele ou não
        console.log('Quadro de Honra')            // estrutura if puxa a função entre para realizar os testes
    } else if (nota.entre(7, 8.99)) {             // testar as notas nos intervalos até que dê um retorno verdadeiro
        console.log('Aprovado')
    } else if (nota.entre(4, 6.99)) {
        console.log('Recuperação')
    } else if (nota.entre(0, 3.99)) {
        console.log('Reprovado')
    } else {
        console.log('Nota Inválida')
    }
}

imprimirResultado(10)
imprimirResultado(8.9)
imprimirResultado(6.55)
imprimirResultado(2,3)
imprimirResultado(-1)
imprimirResultado(11)