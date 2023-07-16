async function teste() {
    await console.log('antes do setTimeout')
    await setTimeout(() => console.log('testando o setTimeout'), 3000)
    await console.log('dps do setTimeout')
}

teste()