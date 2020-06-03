const moduloA = require('../../moduloA')    // importa arquivo(MÓDULO) de um endereço relativo      se for  ".js"  não precisa colocar  ".js"
console.log(moduloA.ola)

const saudacao = require('saudacao')        // importa de dentro de node_modules
console.log(saudacao.ola)

const c = require('./pastaC')               // importa por padrão o aqruivo "index.js" de dentro da pasta
console.log(c.ola2)

const http = require('http')                // importa direo do core do node que já vem nele
http.createServer((req, res) => {
    res.write('Bom dia!')
    res.end()
}).listen(8080)                             // Utiliza a porta 8080