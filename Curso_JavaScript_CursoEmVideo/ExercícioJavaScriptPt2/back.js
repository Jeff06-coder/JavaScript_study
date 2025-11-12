alert('Bem vindo!')

function carregar() {
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#img-manha');
    var data = new Date();
    var hora = data.getHours();
    //var hora = 22;
    msg.innerHTML = `<h1>Agora são <strong>${hora} horas</strong>.</h1>`;

    if (hora >= 5 && hora < 12) {
        //Bom dia
        img.src = ".//Imagens/pexels-khezez-34400296.jpg";
        document.body.style.background = 'rgba(221, 93, 24, 0.7)';
    } else if (hora >= 12 && hora < 18) {
        //Boa tarde
        img.src = ".//Imagens/pexels-anderson-martinsz-2386144.jpg";
        document.body.style.background = 'rgba(255, 89, 0, 1)';
    } else if (hora >= 18 && hora < 24) {
        //Boa noite
        img.src = ".//Imagens/pexels-pixabay-355465.jpg";
        document.body.style.background = 'rgba(4, 29, 139, 1)';
    } else {
        //Madrugada
        img.src = ".//Imagens/pexels-eberhardgross-2098427.jpg";
        document.body.style.background = 'rgba(0, 0, 0, 0.8)';
    }




}