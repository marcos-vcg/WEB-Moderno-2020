const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}
minhaFuncao()

function exec() {
    const valor = 'Teste'
    console.log(valor)
}
exec()

function funcao() {
    const func = 'Fudeu'
    minhaFuncao()
}
funcao()
