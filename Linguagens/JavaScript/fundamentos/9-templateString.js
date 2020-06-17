const nome = 'Rebeca'
const concatenacao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`
console.log(concatenacao, template)

// expressoes...
console.log(`1 + 1 = ${1 + 1}`)  // ele interpreta o que está interpolado por ${ }

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}`)

//const namorada = 'tayna'
//const nomegrande = namorada => namorada.toUpperCase()
//console.log(`Ei... ${up(namorada)}`)

