


function verificar() {

    var Velocidade = window.document.getElementById('txtvel')
    var res = window.document.querySelector('div#res')
    var vel = Number(Velocidade.value)
    res.innerHTML = `<p>Sua velocidade é de <strong>${vel}Km/h</strong></p>`
    if (vel > 60) {
        res.innerHTML +=`Você foi <strong>multado</strong> por excesso de celocidade!<br>`
    }
    res.innerHTML += `Dirija sempre com cinto de segurança!<br>`

}


function nacionalidade() {

    var pais = window.document.querySelector('input#txtpais')
    var res2 = window.document.querySelector('div#res2')
    var p = String(pais.value)
    res2.innerHTML = `<p>Você nasceu no(a) <strong>${p}</strong></p>`
    if (p == "Brasil" || p == "brasil") {
        res2.innerHTML += `Você é <strong>brasileiro</strong>!<br>`
    } else {
        res2.innerHTML += `Você é <strong>estrangeiro</strong>!<br>`}

}

