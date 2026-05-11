// URL base da API dos Simpsons, já pedindo até 1000 personagens
const BASE_URL = "https://apisimpsons.fly.dev/api/personajes?limit=1000";

// Função assíncrona que busca personagens pelo nome
export async function searchHero(name) {
  try {
    // Faz a requisição HTTP para a API
    const response = await fetch(BASE_URL);

    // Converte a resposta para JSON
    const data = await response.json();

    // Filtra os personagens retornados pelo campo "Nombre"
    // toLowerCase() garante que a busca não seja sensível a maiúsculas/minúsculas
    return data.docs.filter((hero) =>
      hero.Nombre.toLowerCase().includes(name.toLowerCase())
    );
  } catch (error) {
    // Caso ocorra algum erro (ex: sem internet ou API fora do ar)
    console.error("Erro ao buscar personagem:", error);

    // Lança o erro para ser tratado no main.js
    throw new Error("Falha na conexão com a API");
  }
}
