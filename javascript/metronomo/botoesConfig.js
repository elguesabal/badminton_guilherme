// BOTOES DE BATIDAS
let nBolas = Number(document.getElementById('btnNBatida').value)
let variavelBolaTempo = ['1', '1', '1']

function batidas() {
    if(nBolas != Number(document.getElementById('btnNBatida').value)) {
        nBolas = Number(document.getElementById('btnNBatida').value)
        document.getElementById('grupoDots').innerHTML = null
        
        for(let i = 1; i <= nBolas; i++) {
            document.getElementById('grupoDots').innerHTML += `
            <div class="containerDot" onclick="bolaTempo(${i})">
                <div class="dot" id="bola${i}">
                    <div class="dotBefore" id="beforeBola${i}"></div>
                    <svg xmlns="http://www.w3.org/2000/svg" id="iconMute${i}" fill="currentColor" class="bi bi-volume-mute-fill" viewBox="0 0 16 16">
                        <path d="M6.717 3.55A.5.5 0 0 1 7 4v8a.5.5 0 0 1-.812.39L3.825 10.5H1.5A.5.5 0 0 1 1 10V6a.5.5 0 0 1 .5-.5h2.325l2.363-1.89a.5.5 0 0 1 .529-.06zm7.137 2.096a.5.5 0 0 1 0 .708L12.207 8l1.647 1.646a.5.5 0 0 1-.708.708L11.5 8.707l-1.646 1.647a.5.5 0 0 1-.708-.708L10.793 8 9.146 6.354a.5.5 0 1 1 .708-.708L11.5 7.293l1.646-1.647a.5.5 0 0 1 .708 0z"/>
                    </svg>
                </div>
            </div>
            `
        }

        variavelBolaTempo = []
        for(let i = 0; i < nBolas; i++) {
            variavelBolaTempo.push(1)
        }
    }
}
// BOTOES DE BATIDAS


// BOTOES DE CLIQUES/BATIDAS
// let nCliquesBatidas = Number(document.getElementById('btnCliqueBatidas').value)

// function cliquesBatidas() {
//     if(nCliquesBatidas != Number(document.getElementById('btnCliqueBatidas').value)) {
//         nCliquesBatidas = Number(document.getElementById('btnCliqueBatidas').value)
//     }
// }
// BOTOES DE CLIQUES/BATIDAS