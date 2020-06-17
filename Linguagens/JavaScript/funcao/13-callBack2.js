const notas = [7.7, 6.5, 5.2, 8.9, 3.6, 7.1, 9.0]

// Sem CALLBACK

let notasBaixas = []
for (let i in notas) {
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com CALLBACK
notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})
console.log(notasBaixas2)

// Com CALLBACK + Função Arrow
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

// Usando função
const notaMenorQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notaMenorQue7)
console.log(notasBaixas4)
