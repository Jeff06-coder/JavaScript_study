
function tabuada() {

    let msg = document.getElementById('msg')
    let num = document.getElementById('num')
    let tab = document.getElementById('tabela')


    if (Number(num.value) < 0 || num.value.length == 0) {

        alert('[ERRO] Reveja os dados informados')
        msg.innerHTML = 'ERRO!'

    } else {

        msg.innerHTML = 'Tabuada feita!'

        tab.innerHTML = `<br>` //"Limpando" a tabela

        for (var c = 0; c <= 10; c++) {

            var res = Number(num.value)
            res = res * c

            tab.innerHTML += `${num.value}x${c}= ${res} <br>`
            //Necessário value se não, não vai ler como um número


        }


    }



}