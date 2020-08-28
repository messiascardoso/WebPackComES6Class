import Cliente from "./Cliente/Cliente.js";
import ContaCorrente from "./ContaCorrente/ContaCorrente.js";
import aberturaDeContas from "./aberturaDeContas.js";
import Movimentacao from "./Movimentacoes/movimentacoes.js";

const contasCorrentesCriadas = [];

aberturaDeContas.forEach((conta) => {
	let novaContaCorrente =addContaCorrente(conta);
	conta.contaCorrente.movimentacao.forEach((value) => {
    addMovimentacao( novaContaCorrente, value)
	});
	contasCorrentesCriadas.push(novaContaCorrente )
});

function addContaCorrente(conta) {
	let novoCliente = new Cliente({
    id: conta.clienteID,
    nome: conta.clienteNome,
    email: conta.clienteEmail,
    cpf: conta.clienteCPF,
  });

  let novaContaCorrente = new ContaCorrente({
    id: conta.contaCorrente.id,
    contaPoupanca: conta.contaPoupanca,
    cliente: novoCliente,
	});
	return novaContaCorrente;
}

function addMovimentacao( novaContaCorrente, movimento) {
	const _movimentacao = new Movimentacao({
		operacao: movimento.operacao,
		custo: movimento.custo,
		action: movimento.action,
	});
	novaContaCorrente.addMovimentacao(_movimentacao);
}

function exibirContas(contas) {
  contas.forEach((conta, index) => {
    console.log(`____ Dados do Cliente: ${index} ________________`);
    console.log("ID:", conta.cliente.id);
    console.log("Nome:", conta.cliente.nome);
    console.log("E-mail:", conta.cliente.email);
    console.log("Cpf:", conta.cliente.cpf);
    console.log("Saldo Poupança: ", conta.saldo);
    console.log("Saldo Conta corrente: ", conta.saldoContaCorrente);

    console.log("__________Movimentacoes____________");
    conta._movimentacoes.forEach((movimentacao) => {
      console.log("Opercao: ", movimentacao.operacao);
      console.log("Custo: ", movimentacao.custo);
      console.log("Action: ", movimentacao.action);
    });
  });
}

exibirContas(contasCorrentesCriadas);
