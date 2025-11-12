

console.log("Condicionais em JavaScript");

//Condicional simples
var idade = 18;
console.log(`Idade do usuário: ${idade}`);
if (idade < 18) {
    console.log("Você é menor de idade, não pode dirigir.");
}
console.log('Cuidado!');

//Condicional composta
var pais = "EUA";
console.log(`País de origem: ${pais}`);
if (pais == "Brasil") {
    console.log("Você é brasileiro.");
} else {
    console.log("Você é estrangeiro.");
}