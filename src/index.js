import Cliente from "./Cliente/Cliente.js";
import ContaCorrente from "./ContaCorrente/ContaCorrente.js";
import aberturaDeContas from "./aberturaDeContas.js";
import Movimentacao from "./Movimentacoes/movimentacoes.js";

const contasCorrentes = [];

aberturaDeContas.forEach((conta) => {
  let cliente = new Cliente({
    id: conta.clienteID,
    nome: conta.clienteNome,
    email: conta.clienteEmail,
    cpf: conta.clienteCPF,
  });

  let contaCorrente = new ContaCorrente({
    id: conta.contaCorrente.id,
    saldo: conta.contaCorrente.saldo,
    contaPoupanca: conta.contaPoupanca,
    cliente: cliente,
    movimentacao: conta.contaCorrente.movimentacao,
  });

  conta.contaCorrente.movimentacao.forEach((value) => {
    const _movimentacao = new Movimentacao({
      operacao: value.operacao,
      custo: value.custo,
      action: value.action,
    });
    // contaCorrente.movimentacao(_movimentacao);
  });
   contasCorrentes.push(contaCorrente);
});

function exibirContas(contas) {
  contas.forEach((conta, index) => {
    console.log(`____ Dados do Cliente: ${index} ________________`);
    console.log("ID:", conta.cliente.id);
    console.log("Nome:", conta.cliente.nome);
    console.log("E-mail:", conta.cliente.email);
    console.log("Cpf:", conta.cliente.cpf);
    console.log("Saldo Poupança: ", conta.saldo);
    console.log("Saldo Conta corrente: ", conta.saldo);

    console.log("__________Movimentacoes____________");
    conta.movimentacao.forEach((movimentacao) => {
      console.log("Opercao: ", movimentacao.operacao);
      console.log("Custo: ", movimentacao.custo);
      console.log("Action: ", movimentacao.action);
    });
  });
}

exibirContas(contasCorrentes);
