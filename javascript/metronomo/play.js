function play() {
    console.log(60 / currentNumber)
    document.getElementById('compassoBola').style.transition = `${60 / currentNumber}s`
    
    // if(compassoBatida) {
    //     clearInterval(compassoBatida)
    // }
    
    let compassoBatida = setInterval(() => {

        if(document.getElementById('compassoBola').style.left == '15%') {
            document.getElementById('compassoBola').style.left = '80%'
        } else if(document.getElementById('compassoBola').style.left == '80%') {
            document.getElementById('compassoBola').style.left = '15%'
        }


        const batida1 = new Audio('./audio/batida1.wav')
        const batida2 = new Audio('./audio/batida2.wav')
        if(variavelBolaTempo[1].audio == 1) {
            batida1.play()
        } else if(variavelBolaTempo[1].audio == 2) {
            batida2.play()
        }
        
    }, 60 / currentNumber * 1000)
    console.log('teste', compassoBatida)
    // clearInterval(compassoBatida)
}