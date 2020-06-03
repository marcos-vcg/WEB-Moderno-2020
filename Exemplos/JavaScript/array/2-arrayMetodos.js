const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop()     // Remove o último
console.log(pilotos)

pilotos.push('Verstappen')   // Acrescenta na última posição.
console.log(pilotos)

pilotos.shift()    // Remove o primeiro.
console.log(pilotos)

pilotos.unshift('Hamilton')   // Acrescenta na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos)

// remover
pilotos.splice(3,1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)

