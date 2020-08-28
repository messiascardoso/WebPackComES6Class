export default class ContaCorrente {
  constructor({ cliente, id, saldoPoupanca }) {
    this.id = id;
    this.saldoPoupanca = saldoPoupanca;
    this.cliente = cliente;
    this._movimentacoes = [];
  }

  addMovimentacao(valor) {
    this._movimentacoes.push(valor);
  }
  get saldoContaCorrente() {
		let total = 0
		 total = this._movimentacoes
			.map((value) => value.custo)
      .reduce((ac, cc) => {
        return (ac += cc);
			}, 0);
		return total.toFixed(2)	
  }
}
