
function contador() {
    var n1 = document.getElementById('iniN')
    var n2 = document.getElementById('fimN')
    var passo = document.getElementById('pasN')
    var txt = document.getElementById('txt')


    if (passo.value.length == 0 || Number(n2.value) == 0 || Number(passo.value) <= 0 || n1.value.length == 0 || n2.value.length == 0) {

        alert('Verifique os dados!')
        txt.innerHTML = '[Erro]'

    } else {

        txt.innerHTML = 'Contando: '
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(passo.value)

        if (i < f) {

            for (var c = i; c <= f; c += p) {

                txt.innerHTML += ` \u{1F449}${c} `
            }
        } else {

            for (var c = i; c >= f; c -= p) {

                txt.innerHTML += ` \u{1F449}${c} `
            }

        }

        txt.innerHTML += `\u{1F3C1}`
    }

}