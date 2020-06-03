// Json => Formato textual que pode ser lido por qualquer linguagem.
// Permite a Interoperabilidade entre diferentes tecnologias.
// Não aceita funções, apenas dados 

const obj = {a: 1, b: 2, c: 3, soma() {return a + b + c} }
console.log(JSON.stringify(obj))

// Nomes dos atributos e strings precisam ser passados por aspas duplas. 
// Caso contrário dão erros.
console.log(JSON.parse('{"a":1,"b":2,"c":3}') )
console.log(JSON.parse( '{"a": 1.7, "b": "string", "c": true, "d": { }, "e": []}' ))
