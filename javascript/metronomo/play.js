function play() {
    console.log(60 / currentNumber)
    document.getElementById('compassoBola').style.transition = `${60 / currentNumber}s`

    for(let i = 0; i < 10; i++) {
        setTimeout(() => {

            if(document.getElementById('compassoBola').style.left == '15%') {
                document.getElementById('compassoBola').style.left = '80%'
            } else if(document.getElementById('compassoBola').style.left == '80%') {
                document.getElementById('compassoBola').style.left = '15%'
            }


            const batida1 = new Audio('./audio/batida1.wav')
            const batida2 = new Audio('./audio/batida2.wav')
            if(variavelBolaTempo[i % variavelBolaTempo.length] == 1) {
                document.getElementById(`bola${(i % variavelBolaTempo.length) + 1}`).style.transform = 'rotateZ(180deg)'
                batida1.play()
            } else if(variavelBolaTempo[i % variavelBolaTempo.length] == 2) {
                document.getElementById(`bola${(i % variavelBolaTempo.length) + 1}`).style.transform = 'rotateZ(180deg)'
                batida2.play()
            }

            setTimeout(() => document.getElementById(`bola${(i % variavelBolaTempo.length) + 1}`).style.transform = 'rotateZ(0deg)', 60 / currentNumber * 1000)

        }, i * 60 / currentNumber * 1000)
    }

}