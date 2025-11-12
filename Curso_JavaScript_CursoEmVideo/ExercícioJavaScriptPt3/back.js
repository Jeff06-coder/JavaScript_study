function verificador() {

    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fAno.value.length == 0 || Number(fAno.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')//Pega o elemento sexo pelo name
        var idade = ano - Number(fAno.value)
        var gênero = ''//Cria a variável gênero para ser preenchida depois
        var img = document.createElement('img')//Cria o elemento img via JS
        img.setAttribute('id', 'foto')//Adiciona um id à img criada

        if (fsex[0].checked) { //Verifica se o radio do homem está selecionado
            gênero = 'Homem'
            if (idade >= 1 && idade < 13) {
                //Criança
                img.setAttribute('src', 'menino.jpg')//Adiciona o atributo src à img criada
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'homem.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Idoso.jpg')
            }
        } else if (fsex[1].checked) {//Verifica se o radio da mulher está selecionado
            gênero = 'Mulher'
            if (idade >= 1 && idade < 13) {
                //Criança
                img.setAttribute('src', 'menina.jpg')//Adiciona o atributo src à img criada
            } else if (idade < 25) {
                //Jovem
                img.setAttribute('src', 'mulher.jpg')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //Idoso
                img.setAttribute('src', 'Idosa.jpg')
            }
        }
        res.innerHTML = `Você é ${gênero} com ${idade} anos.`//Adiciona o texto na div res
        res.appendChild(img)//Adiciona a img criada dentro da div res
    }

    //PARA AS IMAGENS FUNCIONAREM, COLOQUE AS IMAGENS NA MESMA PASTA DO ARQUIVO HTML E JS

}