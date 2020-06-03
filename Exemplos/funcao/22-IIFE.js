// IIFE - Imediately Invoked Function Expression

(function(){
    console.log('Será executado na hora!')
    console.log('Foge do escopo mais abrangente!')
})()

// A função já é auto invocável e alem disso ainda foge do escopo global, ou seja,
// tudo que estiver dentro da função anônima vai ser executado assim que o script for lido,
// mas variáveis não conseguem ser acessadas pelo escopo global.