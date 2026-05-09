===========================================================
        PROJETO: GALERIA DE PERSONAGENS DOS SIMPSONS
===========================================================

DESCRIÇÃO
------------
Este projeto consome a API pública dos Simpsons:
https://apisimpsons.fly.dev/api/personajes?limit=1000

Ele permite buscar personagens pelo nome e exibir
informações como:
- Nome
- Imagem
- Ocupação
- Estado (vivo, morto, etc.)

Tudo é feito diretamente no navegador (front-end),
sem necessidade de servidor ou proxy.

-----------------------------------------------------------
COMO FUNCIONA A REQUISIÇÃO DA API
-----------------------------------------------------------

1. O front-end (JavaScript) faz um `fetch` para a URL:
   https://apisimpsons.fly.dev/api/personajes?limit=1000

2. A API retorna um objeto JSON com a lista de personagens:
   {
     "docs": [
       {
         "Nombre": "Homer Simpson",
         "Imagen": "https://...",
         "Ocupacion": "Operador na Usina Nuclear",
         "Estado": "Vivo"
       },
       ...
     ]
   }

3. O código filtra os resultados pelo nome digitado
   no campo de busca (`hero-input`).

4. Para cada personagem encontrado, é criado um "card"
   com nome, imagem e informações adicionais.

-----------------------------------------------------------
ARQUITETURA DO PROJETO
-----------------------------------------------------------

                +-------------------+
                |   API Simpsons    |
                | (dados em JSON)   |
                +---------+---------+
                          |
                          v
                +-------------------+
                |   api.js          |
                | - Faz o fetch     |
                | - Filtra resultados|
                +---------+---------+
                          |
                          v
                +-------------------+
                |   main.js         |
                | - Controla input  |
                | - Chama api.js    |
                | - Renderiza cards |
                +---------+---------+
                          |
                          v
                +-------------------+
                |   dom.js          |
                | - Cria elementos  |
                | - Monta card HTML |
                +---------+---------+
                          |
                          v
                +-------------------+
                |   index.html      |
                | - Estrutura base  |
                | - Campo de busca  |
                | - Container cards |
                +-------------------+

-----------------------------------------------------------
FRONT-END vs BACK-END
-----------------------------------------------------------

FRONT-END:
- index.html → estrutura da página
- style.css → estilos visuais
- main.js → lógica da busca e exibição
- dom.js → criação dos cards
- api.js → requisição à API

BACK-END:
- Neste projeto NÃO há back-end próprio.
- A API dos Simpsons já funciona como servidor,
  entregando os dados prontos em JSON.

-----------------------------------------------------------
COMO USAR
-----------------------------------------------------------

1. Abra o arquivo index.html no navegador.
2. Digite o nome de um personagem (ex: "Homer").
3. Clique em "Buscar".
4. Veja os cards renderizados com informações
   e imagens dos personagens.

===========================================================
