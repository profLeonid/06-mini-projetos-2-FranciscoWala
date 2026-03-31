'use strict'

function handleClick(){
    const quantidade = Number(document.getElementById('quantidade').value)

    const listaNum = criarListaNumeros()
    const listaSomados = criarListaSomados(quantidade)
    const listaSub = criarListaSub(quantidade)
    const listaMult = criarListaMult(quantidade)
    const listaDiv = criarListaDivisao(quantidade)

    document.getElementById("tbody").replaceChildren()

    for( let i=0; i<= 10; i++){
        criarLinhas(listaNum[i],listaSomados[i],listaSub[i],listaMult[i],listaDiv[i])
    }
}

function criarLinhas(num, soma, sub, mult, divisao){

    const tbody = document.getElementById("tbody")
    const tr = document.createElement('tr')

    const tdnum = document.createElement('td')
    tdnum.textContent = num

    const tdSoma = document.createElement('td')
    tdSoma.textContent = soma

    const tdSub = document.createElement('td')
    tdSub.textContent = sub

    const tdMult = document.createElement('td')
    tdMult.textContent = mult

    const tdDiv = document.createElement('td')
    tdDiv.textContent = divisao

    tr.replaceChildren(tdnum, tdSoma, tdSub, tdMult, tdDiv)

    tbody.appendChild(tr)

}

function criarListaNumeros(){
    let listaNumeros = []
    for (let i = 1; i<= 10; i++ ){
        listaNumeros.push(i)
    }
    return listaNumeros
}
//quantidade valendo 1
function criarListaSomados(quantidade){
    //cira um array vazio
    let listaNumeroSomados = []
    //cria um contador com inicio 1, se ele for menor ou igual a 10, soma mais 1
    for (let i = 1; i<= 10; i++ ){
        //crio uma variavel chamada soma, equivale a 0
        //a quantidade é 1
        //e i também é 1
        //logo, soma = 2
        let soma = quantidade + i
        //a variavel listaNumeroSomados que é um array, adiciona o valor da soma
        listaNumeroSomados.push(soma)
    }
    //retorna listaNumeroSomados = [2]
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