console.log('01)', '1' == 1)   // igual? == compara apenas o valor  
console.log('02)', '1' === 1)  // estritamente igual? === compara o valor e o tipo
console.log('03', '3' != 3)
console.log('04', '3' !== 3)

console.log('05)', 3 < 2)
console.log('05)', 3 > 2)
console.log('07)', 3 <= 2)
console.log('08)', 3 >= 2)

const d1 = new Date(0)
console.log(d1)
const d2 = new Date(0)
console.log(d2)

console.log('09)', d1 == d2)                        // compara referencias de endereços de memória diferentes
console.log('10)', d1 === d2)                       // compara referencias de endereços de memória diferentes
console.log('11)', d1.getTime() === d2.getTime())   // convertido em valor numérico(mili seg) = mesmo tipo e mesmo valor

console.log('12)', undefined == null)
console.log('13)', undefined === null)

function disp(a) {
    console.log(a)
}
disp('alguma coisa')
