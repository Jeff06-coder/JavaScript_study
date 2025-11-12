//Array, Vetores

let num = [6, 3, 7, 94, 3]
num[3] = 6
num.push(8) //Adiciona ao final do vetor
num.sort() //Coloca em ordem o vetor



console.log(`Meu vetor: ${num.length}`) //Mostra a quantidade nos vetores
console.log(`Meu vetor: ${num}`) //Mostrando meu vetor

let valores = [6, 1, 32, 12, 8, 0]

/*
for(let pos = 0; pos < valores.length; pos++){
    console.log(`O valor da posição ${pos} é ${valores[pos]}`)

} console.log(valores)
 */

for (let pos in valores) {
    console.log(valores[pos])  //Método mais pratico
}

let pro = valores.indexOf(32)
console.log(`O valor 32 está na posição ${pro}`)