const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')                                // client http => faz requisições pra obter informações de algo que está remoto

//axios através do get solicita o conteúdo http, e então utiliza na função response coloca na constante funcionários os dados de cada response.
axios.get(url).then(response => {
    const funcionarios = response.data
    console.log(funcionarios)
})


//obter a mulher chinesa com menor salário