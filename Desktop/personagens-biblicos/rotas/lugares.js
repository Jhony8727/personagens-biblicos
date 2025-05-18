const express = require('express');
const router = express.Router();
const db = require('../data/lugares');

// GET todos os lugares
router.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const resultado = db.lugares.slice(start, end).map(({ nome, localizacao, descricao }) => ({
    nome, localizacao, descricao
  }));

  res.json({
    pagina: page,
    total: db.lugares.length,
    resultados: resultado
  });
});

router.get('/:id', (req, res) => {
  const lugar = db.lugares.find(l => l.id == req.params.id);
  if (!lugar) return res.status(404).send("Lugar não encontrado.");

  const { nome, localizacao, descricao } = lugar;
  res.json({ nome, localizacao, descricao });
});

// POST novo lugar
router.post('/', (req, res) => {
  const { nome, localizacao, descricao } = req.body;
  const novo = { id: db.nextId++, nome, localizacao, descricao };
  db.lugares.push(novo);
  res.status(201).json(novo);
});

// PUT atualizar
router.put('/:id', (req, res) => {
  const lugar = db.lugares.find(l => l.id == req.params.id);
  if (!lugar) return res.status(404).send("Lugar não encontrado.");
  const { nome, localizacao, descricao } = req.body;
  lugar.nome = nome;
  lugar.localizacao = localizacao;
  lugar.descricao = descricao;
  res.json(lugar);
});

// DELETE
router.delete('/:id', (req, res) => {
  const index = db.lugares.findIndex(l => l.id == req.params.id);
  if (index === -1) return res.status(404).send("Lugar não encontrado.");
  db.lugares.splice(index, 1);
  res.status(204).send();
});

module.exports = router;