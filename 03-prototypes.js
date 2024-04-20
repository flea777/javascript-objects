// Prototype = cria um método "pai" para todos os objeto

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

// Pessoa.prototype === p1.__proto__

Pessoa.prototype.nomeCompleto = function() { 
  return this.nome + ' ' + this.sobrenome
};

const p1 = new Pessoa('Alex', 'Brown');
const p2 = new Pessoa('Maria', 'Green');
console.log(p1.nomeCompleto());
