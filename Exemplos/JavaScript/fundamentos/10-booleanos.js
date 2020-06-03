let isAtivo = false
console.log(isAtivo)

isAtivo = true
console.log(isAtivo)

isAtivo = 1
console.log(isAtivo)

console.log('Os Verdadeiros...') //!falso, !!verdadeiro   if?
console.log(!!3)
console.log(!!-1)
console.log(!!' ')           // espaço é considerado caracter
console.log(!!'texto')
console.log(!![])            //Array 
console.log(!!{})            //Objeto Literal
console.log(!!Infinity)
console.log(!!(isAtivo = true))   //pega o resultado

console.log('Os Falsos...')
console.log(!!0)
console.log(!!'')     //String sem nada
console.log(!!null)
console.log(!!NaN)    //Not a Number
console.log(!!undefined)
console.log(!!(isAtivo = false))

console.log('Pra Finalizar...')
console.log(!!('' || null || 0 || ' ' || 123))      //  || ou || ou se der um deles ja é verdadeiro
console.log('' || null || 0 || 'êpa' || 123)    // pega como resultado o primeiro que der verdadeiro
console.log('' || null || 0 || '' || 123)
console.log('' || null || 0 || '')             // se não tiver nenhum verdadeiro não pega nenhum

let nome = ''
console.log(nome)
console.log(nome || 'Desconhecido')   //caso o primeiro não esteja válido use o segundo como o padrão

nome = 'Tayná'
console.log(nome || 'Desconhecido')