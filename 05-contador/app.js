'use strict'

function criarListaNumeros(quantidade){
    let listaNumeros = []
    for (let i = 1; i<= quantidade; i++ ){
        listaNumeros.push(i)
    }
    return listaNumeros
}

function criarListaPares(quantidade){
    let listaPares = []
    let par = 0
    for (let i = 0; i < quantidade; i++){
        par = par + 2
        listaPares.push(par)
    }
    return listaPares

}

function criarListaImpares(quantidade){
    let listaImpares = []
    let impar = 1
    for(let i = 1; i<= quantidade; i++){
        impar = i * 2 - 1
        listaImpares.push(impar)
    }
    return listaImpares
}

function criarListaMulti5(quantidade){
    let listaMulti5 = []
    let multi5 = 0
    for(let i = 1; i<= quantidade; i++){
        multi5 = multi5 + 5
        listaMulti5.push(multi5)
    }
    return listaMulti5
}

function criarListaPotencia(quantidade){
    let listaPotencia = []
    let potencia = 2
    let numeroPotencia
    for (let i = 0; i < quantidade; i++){
        numeroPotencia = potencia ** i 
        listaPotencia.push(numeroPotencia)
    }
    return listaPotencia
}

function criarLinha(num, par, impar, mult5, potencia){
    const tbody = document.getElementById('tbody')
    const tr = document.createElement('tr')

    const tdNum = document.createElement('td')
    tdNum.textContent = num

    const tdpar = document.createElement('td')
    tdpar.textContent = par

    const tdimpar = document.createElement('td')
    tdimpar.textContent = impar

    const tdmult5 = document.createElement('td')
    tdmult5.textContent = mult5

    const tdpotencia = document.createElement('td')
    tdpotencia.textContent = potencia

    tr.replaceChildren(tdNum,tdpar,tdimpar,tdmult5,tdpotencia)
    tbody.appendChild(tr)

}

function handleClick (){

    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNum = criarListaNumeros(quantidade)  
    const listaPar = criarListaPares(quantidade)  
    const listaImpar = criarListaImpares(quantidade)  
    const listaMult5 = criarListaMulti5(quantidade)  
    const listaPotencia = criarListaPotencia(quantidade)

    document.getElementById('tbody').replaceChildren()

    for( let i=0; i< quantidade; i++){

        criarLinha(listaNum[i],listaPar[i],listaImpar[i],listaMult5[i],listaPotencia[i])
    }

}