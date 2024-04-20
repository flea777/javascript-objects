// copiando conteudo de objetos
const p1 = {nome: 'Caneca', preco: 1.8};
const p2 = { ...p1, material: 'Plástico' };
const p3 = Object.assign({}, p1);

p2.nome = 'Copo';
p3.nome = 'Régua';

// array com chaves
Object.keys(p1);

// congela o objeto
Object.freeze(p3);

// array com valores
Object.values(p2);

// array com arrays internos de key + value
const p5 = Object.entries(p1);

console.log(p5);