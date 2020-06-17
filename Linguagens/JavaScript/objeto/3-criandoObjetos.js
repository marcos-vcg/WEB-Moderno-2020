// usando a notação literal
const obj1 = {}
console.log(obj1)

// Object em JS
const obj2 = new Object
console.log(obj2)

// Funções construtoras
function Produto(nome, preco, desconto) {     // preço e desconto só são processados dentro da função, são são acessíveis por fora
    this.nome = nome                          // fica acessível no escopo global
    this.getPrecoComDesconto = () => {
        return preco * (1 - desconto)
    }
}

const p1 = new Produto ('Caneta', 7.99, 0.15)
console.log(p1.getPrecoComDesconto())

const p2 = new Produto ('Notebook', 2998.99, 0.25)
console.log(p2.getPrecoComDesconto())

// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const s1 = criarFuncionario('João', 1000, 4)
const s2 = criarFuncionario('Maria', 900, 1)
console.log(s1.getSalario(), s2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Ana'
console.log(typeof filha)
console.log(filha)
console.log(filha.nome)

// Uma função famosa que retorna objeto
const fromJSON = JSON.parse('{"info": "Sou um JSON!"}')
console.log(fromJSON)
console.log(fromJSON.info)
