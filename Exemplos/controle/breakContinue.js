const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {             //quando o indice for 5, "SAI" do for e desvia o fluxo sem passar pelo restante
        break                 //break só serve para for, while, switch - mais próximo
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {               //quando o indice for 5, "INTERROMPE" a repetição atual e continua da próxima
        continue                //continue so serve para for e while
    }
    console.log(`${y} = ${nums[y]}`)
}

externo: for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo
        console.log(`Par = ${a},${b}`)
    }
}

// break e continue causam desvio de fluxo