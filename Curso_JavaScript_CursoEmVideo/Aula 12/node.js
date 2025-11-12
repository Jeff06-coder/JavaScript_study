// Condição Aninhada
var idade = 18
console.log(`Sua idade é ${idade}`)
if (idade < 16) {
    console.log(`Não vota`)
} else if (idade < 18 || idade > 65) {
    console.log(`Voto opcional`)
} else {
    console.log(`Voto obrigatório`)
}


var agr = new Date()
var hora = agr.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora >= 0 && hora < 5) {
    console.log(`Vai dormir!`)
} else if (hora < 12 && hora >= 5) {
    console.log(`Bom dia!`)
} else if (hora >= 12 && hora < 18) {
    console.log(`Boa tarde!`)
} else {
    console.log(`Boa noite!`)
}


//Condição Mulrtipla
var diaSemana = new Date().getDay()
//console.log(diaSemana)
switch (diaSemana) {
    case 0:
        console.log(`Domingo`)
        break;
    case 1:
        console.log(`Segunda-feira`)
        break;
    case 2:
        console.log(`Terça-feira`)
        break;
    case 3:
        console.log(`Quarta-feira`)
        break;
    case 4:
        console.log(`Quinta-feira`)
        break;
    case 5:
        console.log(`Sexta-feira`)
        break;
    case 6:
        console.log(`Sábado`)
        break;
    default:
        console.log(`[ERRO] Dia inválido!Sertifica-se que o número está entre 0 e 6.`)
        break;
}
