const historias = [
  {
    id: 1,
    titulo: "A travessia do Mar Vermelho",
    personagensIds: [2],
    lugaresIds: [1],
    resumo: "Moisés lidera o povo hebreu na fuga do Egito com a abertura do Mar Vermelho."
  },
  {
    id: 2,
    titulo: "O nascimento de Jesus",
    personagensIds: [4],
    lugaresIds: [4],
    resumo: "Maria dá à luz Jesus em Belém, cumprindo a profecia."
  },
  {
    id: 3,
    titulo: "A pesca milagrosa",
    personagensIds: [5],
    lugaresIds: [5],
    resumo: "Pedro testemunha um milagre de Jesus ao pescar grande quantidade de peixes."
  },
  {
    id: 4,
    titulo: "A unção de Davi",
    personagensIds: [3],
    lugaresIds: [2],
    resumo: "Davi é ungido rei de Israel por Samuel, mesmo sendo o mais jovem entre seus irmãos."
  },
  {
    id: 5,
    titulo: "Profecias de Isaías",
    personagensIds: [1],
    lugaresIds: [2],
    resumo: "Isaías anuncia mensagens de arrependimento e esperança ao povo de Israel."
  }
];

let nextId = 6;

module.exports = { historias, nextId };