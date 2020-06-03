// estrategia 1 para gerar valor padrão
function soma1(a, b, c) {
    a = a || 1       // "a" recebe "a" ou o valor "1" (se o "a" for falso)
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(soma1(), soma1(3), soma1(1, 2, 3))
console.log(soma1(0, 0, 0))        // gera um bug pq o "0" retorna valor falso e assim a variável recebe o valor "1"

// estratégias 2, 3 e 4 para gerar valor padrão
function soma2(a, b, c) {
    a = a !== undefined ? a : 1   // se "a" for estritamente diferente de "UNDEFINED" pega o valor de a, se não = 1  (? = operador ternário) se != undefined tambem serviria para valor nulo
    b = 1 in arguments ? b : 1    // se houver o indice 1 nos argumentos da função pegue o "b", se não pegue o valor 1
    c = isNaN(c) ? 1 : c   // (PRINCIPAL) se "c" não for um núimero pegue 1, se não pegue o próprio "c"
    return a + b + c
}
console.log(soma2(), soma2(3), soma2(1, 2, 3), soma2(0, 0, 0))



// valor padrão do ES2015 - forma preferida. Mais adequada, segura e moderna.
// serve para colocar em parâmetros de função mas nãos e tiver criado uma variável dentro de uma função, nesse caso use estratégia 1

function soma3(a = 1, b = 1, c = 1) {        // valores padrão = 1 / bem mais simples
    return a + b + c
}
console.log(soma3(), soma3(3), soma3(1, 2, 3), soma3(0, 0, 0))