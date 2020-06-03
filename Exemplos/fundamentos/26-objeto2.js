console.log(typeof Object)
console.log(typeof new Object)       // "INSTANCIAR" uma função = NEW

const Client = function() {}           //função vazia
console.log(typeof Client)
console.log(typeof new Client)

class Produto {}      // ES 2015 (ES6) - EcmaScript     // Classe = função
console.log(typeof Produto)
console.log(typeof new Produto())