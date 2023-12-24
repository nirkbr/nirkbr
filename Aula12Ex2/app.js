function verificar() {
let data = new Date()
let ano = data.getFullYear()
let forAno = document.getElementById('txtano')
let resp = window.document.querySelector('div#resp')

if (forAno.value.length == 0 || Number(forAno.value) > ano){
    window.alert('[ERRO] por favor verifique as informações inserida!')
} else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(forAno.value)
        var genero = ''
        let img = document.createElement('Imagens')
        img.setAttribute('id', 'Imagens')
        if (fsex[0].checkd) {
            genero = 'Homem'
        if (idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'Imagens/Menino.jpg')
        }else if(idade < 22){
            //Jovem
            img.setAttribute('src', 'Imagens/Homem.jpg')
        }else if (idade < 60){
            //Adulto
            img.setAttribute('src', 'Imagens/HomemAdulto.jpg')
        }else{
            //Idoso
            img.setAttribute('src', 'Imagens/Senhoridoso.jpg')
        }
        } else if(fsex[1].checkd){
            genero = 'Mulher'
        }
        else if(idade >= 0 && idade < 10){
            //criança
        }else if(idade < 21){
            //Jovem
        }else if(idade < 60){
            //Adulto
        }else {
            //idoso
        }

        resp.style.textAlign = 'center'
       resp.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resp.appendChild('Imagens')
    } 
   
}

