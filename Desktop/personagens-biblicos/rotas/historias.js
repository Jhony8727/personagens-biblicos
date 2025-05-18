const express = require('express');
const router = express.Router();
const db = require('../data/historias');

// GET todas as histórias
router.get('/', (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const start = (page - 1) * limit;
  const end = start + limit;

  const resultado = db.historias.slice(start, end).map(({ titulo, personagensIds, lugaresIds, resumo }) => ({
    titulo, personagensIds, lugaresIds, resumo
  }));

  res.json({
    pagina: page,
    total: db.historias.length,
    resultados: resultado
  });
});

router.get('/:id', (req, res) => {
  const h = db.historias.find(h => h.id == req.params.id);
  if (!h) return res.status(404).send("História não encontrada.");

  const { titulo, personagensIds, lugaresIds, resumo } = h;
  res.json({ titulo, personagensIds, lugaresIds, resumo });
});

// POST nova história
router.post('/', (req, res) => {
  const { titulo, personagensIds, lugaresIds, resumo } = req.body;
  const nova = {
    id: db.nextId++,
    titulo,
    personagensIds,
    lugaresIds,
    resumo
  };
  db.historias.push(nova);
  res.status(201).json(nova);
});

// PUT atualizar
router.put('/:id', (req, res) => {
  const h = db.historias.find(h => h.id == req.params.id);
  if (!h) return res.status(404).send("História não encontrada.");
  const { titulo, personagensIds, lugaresIds, resumo } = req.body;
  h.titulo = titulo;
  h.personagensIds = personagensIds;
  h.lugaresIds = lugaresIds;
  h.resumo = resumo;
  res.json(h);
});

// DELETE
router.delete('/:id', (req, res) => {
  const index = db.historias.findIndex(h => h.id == req.params.id);
  if (index === -1) return res.status(404).send("História não encontrada.");
  db.historias.splice(index, 1);
  res.status(204).send();
});

module.exports = router;