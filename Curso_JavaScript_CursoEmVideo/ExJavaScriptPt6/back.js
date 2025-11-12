let final = document.querySelector('input#finalizar')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let num = document.querySelector('input#fnum')
let valores = []


function isNumero(n) {

    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else { return false }

}

function isLista(n, l) {

    if (l.indexOf(Number(n)) != -1) {
        return true
    } else { return false }

}



function add() {

    if (isNumero(num.value) && !isLista(num.value, valores)) {

        valores.push(Number(num.value))
        let item = document.createElement('option') //Criando o elemento option para conseguir escrever dentro do select
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item) //Adicionando o elemento(option) dentro do select como filho(sempre por ultimo)
        res.innerHTML = ''

    } else {

        alert('Valor inválido ou já adicionado na lista!')

    }
    num.value = ''
    num.focus()
}


function finalizar() { //Nome da fuction tem que ser igual ao ID e NAME, se não, trava o sistema/não funciona

    if (valores.length == 0) {
        alert('Verifique os dados!')
    }
    else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) { //Analisando um por um e definindo qual o maior e o menor

            soma += valores[pos]

            if (valores[pos] > maior) {
                maior = valores[pos]

            }
            if (valores[pos] < menor) {

                menor = valores[pos]

            }

            media = soma / valores.length //Calculando a média

        }

        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p>A soma de todos números é: ${soma}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor} e o maior foi ${maior} dessa lista!</p>`
        res.innerHTML += `<p>A média foi: ${media} dos valores.</p>`

    }


}

