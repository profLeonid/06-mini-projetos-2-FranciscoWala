'use strict'
function handleClick(){

}


const parcelas = 12
const valorTotal = 12000

function calcularSaldoDevedor(valorTotal){
    let parcelaAtual = valorTotal / parcelas

    let listaSaldoDevedor = []
    for(let i = 0; i< parcelas; i++){

        let saldoDevedor = valorTotal - parcelaAtual
        
        let valorAtual = valorTotal
        listaSaldoDevedor.push(valorAtual -= saldoDevedor )
    }
    // let juros = saldoDevedor * (taxa / 100)
    return listaSaldoDevedor
}