const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)       // passa a função várias vezes para cada indice
fabricantes.forEach(fabricante => console.log(fabricante))