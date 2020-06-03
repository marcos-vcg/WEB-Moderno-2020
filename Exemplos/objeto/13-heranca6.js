function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1)
console.log(aula2)

// Simulando o new
function novo (func, ...params) {
    const obj = {}
    obj.__proto__ = func.prototype
    func.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3)
console.log(aula4)
console.log(aula1 === aula3)