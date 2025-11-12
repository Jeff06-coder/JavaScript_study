//Funções avançadas


function parimp(n){

    if (n%2 == 0){
        return 'par'
    } else {
        return 'impar'
    }
}

console.log(parimp(26))

function soma(n1=0,n2=0){  //Se por acaso n passar um dos parametros, é considerado 0
    return n1 + n2

}
console.log(soma(2,3))

let v = function(x){   //Variavel recebendo função
    return x * 4
}
console.log(v(2))


function fatorial(n){
    let fat = 1
    for(let c = n; c > 1; c--){
         fat *= c
    }
    return fat
}
console.log(`O fatorial de 6 é: ${fatorial(6)}`)   //Fatorial de 6: 6! = 6x5xx4x3x2x1 = 720

function fatorial2(n2){
    if (n2 == 1){
        return 1
    } else{
        return n2 * fatorial2(n2-1)
    }

}
console.log(`A fatorial de 12 é: ${fatorial2(12)}`)