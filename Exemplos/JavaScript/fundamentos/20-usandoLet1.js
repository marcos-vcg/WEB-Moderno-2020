var numero = 1
{
    let numero = 2
    console.log('dentro =', numero)
}
console.log('fora =', numero)


// LET usa a variável do escopo mais restrito, caso não houver busca nos escopos mais abrangentes

var numero = 3
{
    let numerooo = 4
    console.log('dentro =', numero)      // 
}
console.log('fora =', numero)

// console.log('dentro =', numerooo)   // 
// As variáveis definidas com LET tem escopo: GLOBAL, de FUNÇÃO, e de BLOCO