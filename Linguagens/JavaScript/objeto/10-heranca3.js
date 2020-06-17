const pai = {nome: 'Pedro', corCabelo: 'preto'}

// Definindo Prototype manualmente
const filha1 = Object.create(pai)
filha1.nome = 'Ana'
console.log(filha1.corCabelo)

// Além do prototype é possível definir atributos e suas propriedades tudo junto.
const filha2 = Object.create(pai, {
    nome: {value: 'Bia', writable: false, enumerable: true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

// Object.keys() Só mostra os atributos próprios do objeto, não mostra os recebidos por herança.
console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

// No for/in mostra todos os atributos, então precisamos verificar se o atributo pertence ao próprio objeto ou recebeu por herança.
for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(`Atributo próprio: ${key}`) : console.log(`Por herança: ${key}`)
}

