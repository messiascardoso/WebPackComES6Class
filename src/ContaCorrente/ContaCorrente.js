import Movimentacoes from "../Movimentacoes/movimentacoes";

import Movimentacao from "../Movimentacoes/movimentacoes";

export default class ContaCorrente {
    constructor({ cliente, id, saldo, movimentacao, contaPoupanca }){
        this.id = id;
        this.saldo = saldo;
        this.contaPoupanca = contaPoupanca
        this.cliente = cliente;
        this.movimentacao = movimentacao
    }
    

    addMovimentacao(valor){
    }

}