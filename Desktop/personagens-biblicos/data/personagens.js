const personagens = [
  { id: 1, nome: "Isaías", idade: 60, descricao: "Profeta do Antigo Testamento", papel: "profeta" },
  { id: 2, nome: "Moisés", idade: 80, descricao: "Líder que libertou os hebreus do Egito", papel: "líder" },
  { id: 3, nome: "Davi", idade: 30, descricao: "Rei de Israel e autor de salmos", papel: "rei" },
  { id: 4, nome: "Maria", idade: 25, descricao: "Mãe de Jesus", papel: "personagem importante" },
  { id: 5, nome: "Pedro", idade: 40, descricao: "Discípulo de Jesus", papel: "discípulo" }
];

let nextId = 6;

module.exports = { personagens, nextId };