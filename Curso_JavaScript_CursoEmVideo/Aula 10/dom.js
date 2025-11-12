
// Adicionando eventos via JavaScript, assim não precisa ficar no HTML
area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', sair)

//Funções dos eventos
function clicar() {

  var area = document.getElementById('area')
  area.innerText = 'Clicou!'
  area.style.color = 'rgba(0, 255, 0, 1)'

}

function entrar() {

  var area = document.getElementById('area')
  area.innerText = 'Entrou!'
  area.style.background = 'red'
  area.style.color = 'white'

}

function sair() {

  var area = document.getElementById('area')
  area.innerText = 'Saiu!'  //Mudando o texto quando sai
  area.style.background = 'blue' //Mudando a cor de fundo quando sai
  area.style.color = 'black' //Mudando a cor do texto quando sai
}

//Função para somar os números inseridos pelo usuário
function somar() {

  var n1 = document.getElementById('txtn1') //Lendo Id
  var n2 = document.querySelector('input#txtn2') //Lendo Id com querySelector
  var num1 = Number(n1.value)  //Fazendo o número string virar number
  var num2 = Number(n2.value) //Fazendo o número string virar number
  var soma = num1 + num2
  var res = document.getElementById('res')
  res.innerText = `Resultado da soma: ${soma}`   //${} só funciona com ``
}