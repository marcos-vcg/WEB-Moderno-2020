function tratarErroELancar(erro) {
    //throw new Error('Erro de sincronizacao de dados com o servidor!')
    throw 'Erro de sincronizacao de dados com o servidor!'
    //throw 10
    //throw true
    
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')    // trechos de código potencialmente perigosos
    } catch (e) {
        tratarErroELancar(e)       // corrigir o erro
    } finally { 
        console.log('END!')        // retorna mesmo que não de erro
    }
}

const obj = { nome: 'Robert' }       // erro no [nome = name] correção
imprimirNomeGritado(obj)