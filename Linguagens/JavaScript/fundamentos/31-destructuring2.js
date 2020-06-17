const [a] = [10]  // é um operador destructuring - não esta definindo array por causa da posição em que foi usado.
console.log(a)
console.log(typeof a)
console.log(typeof [a])
console.log(typeof [10])

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8]   
console.log(n1, n3, n5, n6)   // n2 e n4 geram problema pq não existem, já o n5 apenas não tem valor atribuído

const [ , [ , nota]] = [[ , 8, 8], [9, 6, 8]]
console.log(nota)

// destructuring objetos usa sintaxe das chaves {}
// destructuring arrays usa sintaxe dos conchetes []