function verificar (){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('***ERRO*** Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img = document.createElement('img') // colocando img dentro da div dinamicamente
        img.setAttribute('id','foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', './img/CriançaH.png')
            }else if (idade <21){
                img.setAttribute('src', './img/JovemH.png')
            } else if (idade < 50) {
                img.setAttribute('src', './img/AdultoH.png')
            } else {
                img.setAttribute('src', './img/IdosoH.png')

            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10){
                img.setAttribute('src', './img/CriançaM.png')
            }else if (idade <21){
                img.setAttribute('src', './img/JovemM.png')
            } else if (idade < 50) {
                img.setAttribute('src', './img/AdultoM.png')
            } else {
                img.setAttribute('src', './img/IdosoM.png')
            }

        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}