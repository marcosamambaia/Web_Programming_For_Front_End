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


Como funciona a requisição da API
1. O front-end (JavaScript) faz um fetch para a URL:
   https://apisimpsons.fly.dev/api/personajes?limit=1000

2. A API retorna um objeto JSON com a lista de personagens:
``` {
  "docs": [
    {
      "Nombre": "Homer Simpson",
      "Imagen": "https://...",
      "Ocupacion": "Operador na Usina Nuclear",
      "Estado": "Vivo"
    }
  ]
}
```

3. O código filtra os resultados pelo nome digitado
   no campo de busca (hero-input).

4. Para cada personagem encontrado, é criado um "card"
   com nome, imagem e informações adicionais.



Arquitetura do Projeto
```
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
```
Front-End vs Back-End
Front-End:

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

A API dos Simpsons já funciona como servidor, entregando os dados prontos em JSON.

▶ Como usar
1. Abra o arquivo index.html no navegador.
2. Digite o nome de um personagem (ex: "Homer").
3. Clique em "Buscar".
4. Veja os cards renderizados com informações
   e imagens dos personagens.


 Principais Funções
 searchHero(name) (api.js)
- Função assíncrona (async) -> permite usar await
- fetch(BASE_URL) -> dispara requisição GET para API
- response.json() -> transforma resposta em objeto JS
- data.docs -> contém todos os personagens
- filter() -> percorre cada personagem
   hero.Nombre.toLowerCase().includes(name.toLowerCase())
   -> compara ignorando maiúsculas/minúsculas
- Retorna apenas os personagens que batem com o nome


 createHeroCard(hero) (dom.js)
- Cria um <div> com classe "card"
- Cria <h2> com o nome do personagem
- Cria <img> com a URL da imagem
   - Se não houver imagem, usa placeholder
- Cria <p> com ocupação
- Cria <p> com estado
- Junta tudo dentro do card
- Retorna o card pronto para ser exibido


 main.js
- Captura elementos do DOM (input, botão, container)
- Adiciona evento de clique no botão
- Quando clicado:
   - Pega valor do input
   - Limpa container
   - Se vazio -> mostra aviso
   - Se não vazio -> chama searchHero(name)
   - Recebe array de personagens
   - Se vazio -> mostra aviso
   - Se não vazio -> percorre array
   - Para cada personagem -> cria card com createHeroCard
   - Adiciona card ao container


 Diferenciais
- Consumo de dados em tempo real
- Manipulação dinâmica do DOM
- Tratamento de erros com try...catch
  -> mostra mensagem clara ao usuário em caso de falha
- Interface temática inspirada nos Simpsons

