console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
aprovados.push('Albia')          // Acrescenta na última posição
console.log(aprovados.length)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados[8] === undefined)

aprovados.push('teste')
console.log(aprovados.length)
console.log(aprovados[10])

console.log(aprovados)
aprovados.sort()              // Reorganiza o array original
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Carlos', 'Ana']  // Reatribui para começar de novo
console.log(aprovados[2])
aprovados.splice(1, 1, 'Elemento1', 'Elemento2')
console.log(aprovados)
console.log(aprovados[2])
