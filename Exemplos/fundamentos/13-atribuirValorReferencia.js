const a = {nome: 'Valor 1'}     // conceitos de referência
console.log(a)
const b = a         // a e b armazenam e compartilham o mesmo ENDEREÇO {do objeto ou função} = [atribuição por referência]
console.log(a)
b.nome = 'valor 2'  // alteração no mesmo endereço compartilhado (lugar na memória)
console.log(b)
console.log(a)

let c = 3
let d = c           // tipos primitivos fazem cópia do VALOR cada um com o seu [independentes] = [atribuição por valor]
d++                 // alteração em cada var
console.log(d)
console.log(c)