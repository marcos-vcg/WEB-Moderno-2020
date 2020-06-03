let num1 = 1
let num2 = 2

num1++                             // quando acrescenta fica até o fim
console.log(num1)
--num1
console.log(num1)
console.log(++num1 === num2--)     // segue as prioridades: acrescenta 1 ao num1, compara com o num 2, depois subtrai 1 do num2
console.log(num1 === num2)
console.log(num1, num2)            // priorize códigos mais limpos e simples - refatore constantemente