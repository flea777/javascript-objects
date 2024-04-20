// defineProperty -> configurar as propriedades de um objeto
// Getter e Setters
function Produto(nome, preco, estoque) {
  this.nome = nome;
  this.preco = preco;

  let estoquePrivado = estoque;
  Object.defineProperty(this, 'estoque', {
    enumerable: true, // mostra a chave
    configurable: false, // configurável
    get: () => estoquePrivado,
    set: (valor) => {
      if(typeof valor !== 'number') {
        throw new TypeError('Bad type');
      }

      estoquePrivado = valor;
    },
  });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);
// console.log(Object.keys(p1));