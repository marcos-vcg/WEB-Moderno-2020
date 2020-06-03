const escola = "Cod3r"

console.log(escola.charAt(4))        // String na posição 4
console.log(escola.charAt(5))
console.log(escola.charAt(-1))
console.log(escola.charCodeAt(3))    // Código do string na posição 3
console.log(escola.indexOf('3'))     // Índice do string '3'

console.log(escola.substring(1))     // Do string de Índice 1 em diante
console.log(escola.substring(0, 3))  // Do string de Índice 0 até o ìndice 2 = (3-1)

console.log('Escola '.concat(escola).concat("!"))  // Concatenar Strings pode misturar '' com ""
console.log('Escola ' + escola + "!")

console.log(escola.replace(3, 'e'))
console.log(escola)                      // expressões regulares ...[Curso de Rejax]
console.log(escola.replace(/\d/, 'e'))   // Substitua o "PRIMEIRO" dígito por 'e'
console.log(escola.replace(/\w/g, 'e'))  // Substitua "TODAS" as letras por 'e'

console.log('Ana,Maria,Pedro'.split(','))  // Quebra a STRING em um ARAY nas posições(,)
console.log('Ana,Maria,Pedro'.split(/,/))  // (/./) Comando especial de Rejax



// ``oi``  // template string