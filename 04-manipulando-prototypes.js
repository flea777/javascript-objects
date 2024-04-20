// new Object -> Object.prototype
const objA = {
  chaveA: 'A',
  // __proto__ : Object.prototype
};

const objB = {
  chaveB: 'B',
  // __proto__ : objA
};

// Para objB receber as propriedades de objA
Object.setPrototypeOf(objB, objA);

// ===================================================

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
  this.preco -= (this.preco * (percentual / 100));
};

const p1 = new Produto('Camiseta', 50);
p1.desconto(10);

// Literal
const p2 = {
  nome: 'Caneca',
  preco: 15
};

// Setando prototype de Produto para p2
Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(10);

// Setando prototype ao criar o objeto
const p3 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 42
  },
});

p3.desconto(10);