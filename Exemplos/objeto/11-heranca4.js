function MeuObjeto() {}
console.log(MeuObjeto.prototype)              // .prototype de função => disponível para todos os objetos criados a partir da função


const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Antônio'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()



const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)

obj3.somar = function soma() {return 1}
console.log(obj3.somar.__proto__ === Function.prototype)
console.log(obj3.somar.prototype)

console.log()
let obj4 = new obj3.somar
console.log(obj4.__proto__ === obj3.somar.prototype)

console.log(obj3.somar.__proto__ === Function.prototype)
console.log(obj3.somar.prototype.__proto__ === Object.prototype)
console.log(obj3.somar.__proto__ === obj3.somar.prototype)