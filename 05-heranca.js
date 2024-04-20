// Produto
// Camiseta = cor, caneca = material

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function(valor) {
  this.preco += valor;
};

Produto.prototype.desconto = function(valor) {
  this.preco -= valor;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

// Sobrescrevendo um método
Camiseta.prototype.aumento = function(valor) {
  this.preco += valor + 1.5;
};

function Caneca(nome, preco, material, estoque) {
  Produto.call(this, nome, preco);
  this.material = material;
  this.estoque = estoque;

  Object.defineProperty(this, 'estoque', {
    enumerable: true,
    configurable: false,
    get: function() {
      return estoque;
    },
    set: function(valor) {
      if(typeof valor !== 'number') return;
      estoque = valor;
    }
  });
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto('Genérico', 110);
const camiseta = new Camiseta('Regata', 25.9, 'Preto');
const caneca = new Caneca('Caneca', 13, 'Plástico', 5);
camiseta.aumento(10);