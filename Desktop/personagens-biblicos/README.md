# 📖 Bíblia API

API RESTful construída com Node.js e Express para fornecer dados sobre personagens, lugares e histórias da Bíblia. Inspirada no modelo da Rick and Morty API.

## 🚀 Como iniciar o projeto

1. Clone este repositório:
\`\`\`bash
git clone https://seurepositorio.com/biblia-api
\`\`\`

2. Acesse a pasta do projeto:
\`\`\`bash
cd biblia-api
\`\`\`

3. Instale as dependências:
\`\`\`bash
npm install
\`\`\`

4. Inicie o servidor:
\`\`\`bash
node server.js
\`\`\`

O servidor estará rodando em: [http://localhost:3000](http://localhost:3000)

## 📌 Endpoints disponíveis

### 🔹 Personagens

| Método | Rota                  | Descrição                              |
|--------|-----------------------|----------------------------------------|
| GET    | /personagens          | Lista todos os personagens (com paginação e filtro por papel) |
| GET    | /personagens/:id      | Busca um personagem por ID             |
| POST   | /personagens          | Cria um novo personagem                |
| PUT    | /personagens/:id      | Atualiza um personagem existente       |
| DELETE | /personagens/:id      | Remove um personagem                   |

**Exemplo de JSON para POST:**
\`\`\`json
{
  "nome": "Moisés",
  "idade": 80,
  "descricao": "Libertador do povo de Israel",
  "papel": "profeta"
}
\`\`\`

### 🔹 Lugares

| Método | Rota            | Descrição                           |
|--------|-----------------|-------------------------------------|
| GET    | /lugares        | Lista todos os lugares (com paginação) |
| GET    | /lugares/:id    | Busca um lugar por ID               |
| POST   | /lugares        | Cria um novo lugar                  |
| PUT    | /lugares/:id    | Atualiza um lugar existente         |
| DELETE | /lugares/:id    | Remove um lugar                     |

**Exemplo de JSON para POST:**
\`\`\`json
{
  "nome": "Egito",
  "localizacao": "Norte da África",
  "descricao": "Local onde o povo hebreu foi escravizado"
}
\`\`\`

### 🔹 Histórias

| Método | Rota             | Descrição                          |
|--------|------------------|------------------------------------|
| GET    | /historias       | Lista todas as histórias (com paginação) |
| GET    | /historias/:id   | Busca uma história por ID          |
| POST   | /historias       | Cria uma nova história             |
| PUT    | /historias/:id   | Atualiza uma história existente    |
| DELETE | /historias/:id   | Remove uma história                |

**Exemplo de JSON para POST:**
\`\`\`json
{
  "titulo": "A travessia do Mar Vermelho",
  "personagensIds": [1],
  "lugaresIds": [2],
  "resumo": "Moisés lidera o povo na fuga do Egito atravessando o mar com um milagre"
}
\`\`\`

## 🔍 Busca Geral

- \`GET /busca?q=palavra\`
  - Busca por palavra-chave nos nomes de personagens, títulos de histórias e descrições.

## 📄 Extras

- Suporte a paginação: \`?page=1&limit=5\`
- Suporte a filtro por papel: \`GET /personagens?papel=profeta\`

## 🧑‍💻 Tecnologias Utilizadas

- Node.js
- Express.js
- JavaScript
EOF