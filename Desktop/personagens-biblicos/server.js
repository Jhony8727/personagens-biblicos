const express = require('express');
const app = express();
app.use(express.json());

// Importar rotas
const personagensRoutes = require('./rotas/personagens');
const lugaresRoutes = require('./rotas/lugares');
const historiasRoutes = require('./rotas/historias');

// Rota principal
app.get('/', (req, res) => {
  res.json({ message: "Bíblia API está no ar!" });
});

// Usar rotas
app.use('/personagens', personagensRoutes);
app.use('/lugares', lugaresRoutes);
app.use('/historias', historiasRoutes);

// Iniciar servidor
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});

const { personagens } = require('./data/personagens');
const { lugares } = require('./data/lugares');
const { historias } = require('./data/historias');

// Rota de busca
app.get('/busca', (req, res) => {
  const termo = (req.query.q || "").toLowerCase();

  const resultado = {
    personagens: personagens.filter(p =>
      p.nome.toLowerCase().includes(termo) || p.descricao.toLowerCase().includes(termo)
    ),
    lugares: lugares.filter(l =>
      l.nome.toLowerCase().includes(termo) || l.descricao.toLowerCase().includes(termo)
    ),
    historias: historias.filter(h =>
      h.titulo.toLowerCase().includes(termo) || h.resumo.toLowerCase().includes(termo)
    ),
  };

  res.json(resultado);
});