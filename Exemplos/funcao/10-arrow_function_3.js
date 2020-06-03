let comparaComThis = function (param) {
    console.log(this === param)
}

comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(this === param)      // THIS de uma função arrow é associado ao contexto em que a funçao foi escrita
comparaComThisArrow(global)                                     
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)                 // não tem variação alguma, mesmo com o bind para forçar uma mudança de contexto
comparaComThisArrow(obj)