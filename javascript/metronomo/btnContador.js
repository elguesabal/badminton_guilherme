function contador(quantidade) {
    const scrollports = document.getElementsByClassName("scrollport");
    currentNumber = currentNumber + quantidade;

    for (const scrollport of scrollports) {
        const numbers = scrollport.getElementsByClassName("cell");
        const ultimoNumero = numbers[numbers.length - 300];
        const offsetRolagem = ultimoNumero.offsetTop - scrollport.offsetTop;
        const posicaoRolagem = scrollport.scrollTop;

        if (quantidade == 1) scrollport.scrollTo({ top: posicaoRolagem + offsetRolagem, behavior: "smooth" })
        if (quantidade == 5) scrollport.scrollTo({ top: posicaoRolagem + offsetRolagem * 5, behavior: "smooth" })
        if (quantidade == -1) scrollport.scrollTo({ top: posicaoRolagem - offsetRolagem, behavior: "smooth" })
        if (quantidade == -5) scrollport.scrollTo({ top: posicaoRolagem - offsetRolagem * 5, behavior: "smooth" })
    }
}