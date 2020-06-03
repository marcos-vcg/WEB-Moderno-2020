let dobro = function (a) {
    return 2 * a
}

dobro = (a) => {                     // função anônima, tem que armazenar em uma variavel
    2 * a
}

dobro = (a) => 2 * a           // return implícito
console.log(dobro(Math.PI))

let ola = function () {
    return 'Olá'                  // pra que eu possa retornar o valor
}

ola = () => 'Olá'         // forma padrão, funões pequenas que pedem ser muito reutilizadas
ola = _ => 'Olá'          // possui um parâmetro
console.log(ola())
