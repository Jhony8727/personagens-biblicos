const express = require('express');
const router = express.Router();
const db = require('../data/personagens');

// GET todos
router.get('/', (req, res) => {
  const { papel, page = 1, limit = 10 } = req.query;

  let resultados = db.personagens;

  if (papel) {
    resultados = resultados.filter(p =>
      (p.papel || '').toLowerCase() === papel.toLowerCase()
    );
  }

  const start = (page - 1) * limit;
  const end = start + parseInt(limit);

  // Oculta o campo "id"
  const paginados = resultados.slice(start, end).map(({ nome, idade, descricao, papel }) => ({
    nome, idade, descricao, papel
  }));

  res.json({
    pagina: parseInt(page),
    total: resultados.length,
    resultados: paginados
  });
});

// GET por id
router.get('/:id', (req, res) => {
  const p = db.personagens.find(p => p.id == req.params.id);
  if (!p) return res.status(404).send("Personagem não encontrado.");

  // Retorna sem o campo ID
  const { nome, idade, descricao, papel } = p;
  res.json({ nome, idade, descricao, papel });
});

// POST novo
router.post('/', (req, res) => {
  const { nome, idade, descricao, papel } = req.body;
  const novo = { id: db.nextId++, nome, idade, descricao, papel };
  db.personagens.push(novo);
  res.status(201).json(novo);
});

// PUT atualizar
router.put('/:id', (req, res) => {
  const p = db.personagens.find(p => p.id == req.params.id);
  if (!p) return res.status(404).send("Personagem não encontrado.");
  const { nome, idade, descricao } = req.body;
  p.nome = nome;
  p.idade = idade;
  p.descricao = descricao;
  res.json(p);
});

// DELETE
router.delete('/:id', (req, res) => {
  const index = db.personagens.findIndex(p => p.id == req.params.id);
  if (index === -1) return res.status(404).send("Personagem não encontrado.");
  db.personagens.splice(index, 1);
  res.status(204).send();
});

module.exports = router;