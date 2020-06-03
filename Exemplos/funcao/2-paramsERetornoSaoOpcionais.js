function area(largura, altura) {
    const area = largura * altura
    if (area > 20) {
        console.log(`Valor acima do permitido ${area}m²`)
    } else { 
        return area
    }
}

console.log(area(2, 2))
console.log(area(2))
console.log(area())                          // menos de dois parametros (usa undefined na formula) = NaN
console.log(area(2, 3, 17, 22, 44))          // so usa os dois parametros iniciais
console.log(area(5, 5))                      // função sem retorno para valores acima de 20
