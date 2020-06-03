const valores = [7.7, 8.9, 6.3, 9.2]    //dinâmico pode acrescentar dados
console.log(valores[0], valores[3])     //indexado
console.log(valores[4])                 //indice inexistente

valores[4] = 10              // do 4 ao 9 temos 6 indices vazios no array 
console.log(valores)
console.log(valores.length)

console.log(valores)
valores.push({id: 3}, false, null, 'teste')   // estrutura heterogênea, pode misturar mas não aconselhado
console.log(valores)

console.log(valores.pop())   // deleta o ultimo valor e apresenta ele
console.log(valores)
delete valores[0]            // só deleta o valor de índice declarado
console.log(valores)

console.log(typeof valores)  // Array tipo object

