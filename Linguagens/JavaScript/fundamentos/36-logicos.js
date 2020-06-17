function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2   // or ou = se algum for verdadeiro
    const comprarTv50 = trabalho1 && trabalho2      // and e = os dois tem que ser verdadeiros
    const comprarTv32 = trabalho1 != trabalho2      // xor = exclusivo um dos dois
    const manterSaudavel = !comprarSorvete           // nenhum = nem um nem outro, negativa
    // const comprarTv32 = !!(trabalho1 ^ trabalho2)  //bitwise xor = compara bit a bit

    return { comprarSorvete, comprarTv50, comprarTv32, manterSaudavel }
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))
