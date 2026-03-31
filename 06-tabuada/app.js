'use strict'

function criarListaNumeros(quantidade){
    let listaNumeros = []
    for (let i = 1; i<= quantidade; i++ ){
        listaNumeros.push(i)
    }
    return listaNumeros
}
function criarListaSomados(quantidade){
    let listaNumeroSomados = []
    for (let i = 1; i<= 10; i++ ){
        let soma = quantidade + i
        listaNumeroSomados.push(soma)
    }
    return listaNumeroSomados
}
function criarListaSub(quantidade){
    let listaNumeroSub = []
    for (let i = 1; i<= 10; i++ ){
        let sub = quantidade - i
        listaNumeroSub.push(sub)
    }
    return listaNumeroSub
}
function criarListaMult(quantidade){
    let listaNumeroMult = []
    for (let i = 1 ; i <= 10 ; i++){
        let mult = quantidade * i
        listaNumeroMult.push(mult)
    }
    return listaNumeroMult
}
function criarListaDivisao(quantidade){
    let listaNumeroDiv = []
    for(let i = 1; i<=10; i++ ){
        let divisao = quantidade / i
        listaNumeroDiv.push(divisao.toFixed(2))
    }
    return listaNumeroDiv
}