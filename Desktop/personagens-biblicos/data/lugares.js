const lugares = [
  { id: 1, nome: "Egito", localizacao: "Norte da África", descricao: "Local onde os hebreus foram escravizados" },
  { id: 2, nome: "Jerusalém", localizacao: "Israel", descricao: "Cidade sagrada para judeus e cristãos" },
  { id: 3, nome: "Monte Sinai", localizacao: "Deserto", descricao: "Onde Moisés recebeu os Dez Mandamentos" },
  { id: 4, nome: "Belém", localizacao: "Judéia", descricao: "Cidade onde Jesus nasceu" },
  { id: 5, nome: "Galileia", localizacao: "Israel", descricao: "Região onde Jesus realizou vários milagres" }
];

let nextId = 6;

module.exports = { lugares, nextId };