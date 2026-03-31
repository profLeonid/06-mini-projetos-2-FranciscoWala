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
    let soma = 1
    for (let i = 1; i<= 10; i++ ){
        soma = quantidade + i
        listaNumeroSomados.push(soma)
    }
    return listaNumeroSomados
}
function criarListaSub(quantidade){
    let listaNumeroSub = []
    let sub = 1
    for (let i = 1; i<= 10; i++ ){
        sub = quantidade - i
        listaNumeroSub.push(sub)
    }
    return listaNumeroSub
}
function criarListaMult(quantidade){
    let listaNumeroMult = []
    let mult = 0
    for (let i = 1 ; i <= 10 ; i++){
        mult = quantidade * i
        listaNumeroMult.push(mult)
    }
    return listaNumeroMult
}