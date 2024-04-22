// Superclass

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
  if(valor > this.saldo) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    this.verSaldo();
    return;
  };

  this.saldo -= valor;
  this.verSaldo();
}

Conta.prototype.depositar = function(valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function() {
  console.log(`Ag/c: ${this.agencia}/${this.conta} ` + 
`Saldo: R$${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(11, 22, 10);
conta1.depositar(11);
conta1.sacar(17);
conta1.sacar(5);

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
  if(valor > this.saldo + this.limite) {
    console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`);
    this.verSaldo();
    return;
  }

  this.saldo -= valor;
  this.verSaldo();
};

const conta2 = new ContaCorrente(12, 24, 500.0, 250.0);
conta2.depositar(45.0);
conta2.sacar(650.0);

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const conta3 = new ContaPoupanca(15, 28, 50.0);
conta3.sacar(54.0);