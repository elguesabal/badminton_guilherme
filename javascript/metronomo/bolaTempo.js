// let variavelBolaTempo = ['1', '1', '1']  SE MUDOU PARA ./javascript/botoesConfig.js

function bolaTempo(nBola) {
    const id = document.getElementById(`bola${nBola}`)
    const idBefore = document.getElementById(`beforeBola${nBola}`)
    const iconMute = document.getElementById(`iconMute${nBola}`)
    nBola = nBola - 1

    if(variavelBolaTempo[nBola] == 1) {
        variavelBolaTempo[nBola] = 2

        // MUDA COR DA BOLA
        id.style.background = 'linear-gradient(#ffc95d 0%, #ffcf86 10%, #b57300 50%, #614700 100%)'
        idBefore.style.background = 'linear-gradient(#ffb93f 10%, #dc8b00 50%, #3e2700 100%)'
    } else if(variavelBolaTempo[nBola] == 2) {
        variavelBolaTempo[nBola] = 'mudo'

        // MUDA COR DA BOLA
        id.style.background = 'linear-gradient(#636363 0%, #919191 10%, #4b4b4b 50%, #383838 100%)'
        idBefore.style.background = 'linear-gradient(#585858 10%, #212121 50%, #000000 100%)'

        // ESCONDE O ICONE
        iconMute.style.display = 'flex'
    } else if(variavelBolaTempo[nBola] == 'mudo') {
        variavelBolaTempo[nBola] = 1

        // MUDA COR DA BOLA
        id.style.background = 'linear-gradient(#fffc5d 0%, #fffd86 10%, #b5b200 50%, #615f00 100%)'
        idBefore.style.background = 'linear-gradient(#fffc3f 10%, #dcd800 50%, #3e3d00 100%)'

        // MOSTRA O ICONE
        iconMute.style.display = 'none'
    }
}