 Galeria de Personagens dos Simpsons
 Descrição
Este projeto consome a API pública dos Simpsons:
https://apisimpsons.fly.dev/api/personajes?limit=1000

Ele permite buscar personagens pelo nome e exibir informações como:

 Nome

Imagem

Ocupação

 Estado (vivo, morto, etc.)

Tudo é feito diretamente no navegador (front-end), sem necessidade de servidor ou proxy.

Como funciona a requisição da API
O front-end (JavaScript) faz um fetch para a URL da API.

A API retorna um objeto JSON com a lista de personagens.

O código filtra os resultados pelo nome digitado no campo de busca (hero-input).

Para cada personagem encontrado, é criado um card com nome, imagem e informações adicionais.

Exemplo de resposta da API:
´´´ {
  "docs": [
    {
      "Nombre": "Homer Simpson",
      "Imagen": "https://...",
      "Ocupacion": "Operador na Usina Nuclear",
      "Estado": "Vivo"
    }
  ]
}
´´´
Arquitetura do Projeto
´´´ +-------------------+
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
´´´
Front-End vs Back-End
Front-End:

index.html → estrutura da página

style.css → estilos visuais

main.js → lógica da busca e exibição

dom.js → criação dos cards

api.js → requisição à API

Back-End:

Não há back-end próprio.

A API dos Simpsons já funciona como servidor, entregando os dados prontos em JSON.

▶ Como usar
Abra o arquivo index.html no navegador.

Digite o nome de um personagem (ex: "Homer").

Clique em Buscar.

Veja os cards renderizados com informações e imagens dos personagens.

 Principais Funções
 searchHero(name) (api.js)
Função assíncrona (async) → permite usar await.

fetch(BASE_URL) → dispara requisição GET para API.

response.json() → transforma resposta em objeto JS.

filter() → compara hero.Nombre com o texto digitado (case-insensitive).

Retorna apenas os personagens que batem com o nome.

 createHeroCard(hero) (dom.js)
Cria um <div> com classe "card".

Cria <h2> com o nome do personagem.

Cria <img> com a URL da imagem (ou placeholder).

Cria <p> com ocupação e estado.

Junta tudo dentro do card e retorna para exibição.

 main.js
Captura elementos do DOM (input, botão, container).

Adiciona evento de clique no botão.

Quando clicado:

Pega valor do input.

Limpa container.

Se vazio → mostra aviso.

Se não vazio → chama searchHero(name).

Recebe array de personagens.

Se vazio → mostra aviso.

Se não vazio → percorre array e cria cards com createHeroCard.

Adiciona cards ao container.

 Diferenciais
Consumo de dados em tempo real.

Manipulação dinâmica do DOM.

Tratamento de erros com try...catch → mostra mensagem clara ao usuário em caso de falha de conexão.

Interface temática inspirada nos Simpsons.