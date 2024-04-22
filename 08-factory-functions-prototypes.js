// Manipulando prototype dentro de factory functions, para não sobrecarregar
const falar = {
  falar() {
    console.log(`${this.nome} está falando`);
  }
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo`);
  }
};

const comer =  {
  comer() {
    console.log(`${this.nome} está comendo`);
  }
};

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: {value: nome},
    sobrenome: {value: sobrenome},
  });
}

const p1 = criaPessoa('Pedro', 'Bim');
console.log(p1);