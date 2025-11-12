
//Selecionando por Marca
var p1 = document.getElementsByTagName("p")[1]; //Escolhendo qual p usar para a modificação
p1.style.color = "blue";
document.write(p1.innerHTML); //Para ler tudo do HTML
//alert(p1.innerText);   //Para ler só o texto, sem as tags

//Selecionando por ID
var d = document.getElementById('msg');
d.style.background = 'rgba(151, 21, 138, 1)';
d.innerText = 'Mensagem alterada via DOM';


//Selecionando por Selector
var s = document.querySelector("div#msg"); //Seleciona pelo Id, mas para Class só usar ponto . ao invés de #
s.style.color = 'yellow';

