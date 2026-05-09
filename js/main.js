// Importa as funções de busca e criação de card
import { searchHero } from "./api.js";
import { createHeroCard } from "./dom.js";

// Pega os elementos do HTML
const input = document.getElementById("hero-input");       // campo de texto
const button = document.getElementById("search-btn");      // botão de busca
const container = document.getElementById("cards-container"); // área dos cards

// Adiciona evento de clique no botão
button.addEventListener("click", async () => {
  // Pega o valor digitado e remove espaços extras
  const name = input.value.trim();

  // Limpa o container antes de mostrar novos resultados
  container.innerHTML = "";

  // Se o usuário não digitou nada, mostra aviso
  if (!name) {
    container.innerHTML = "<p>Digite um nome para buscar.</p>";
    return;
  }

  // Chama a função que busca personagens na API
  const heroes = await searchHero(name);

  // Se não encontrar nenhum personagem, mostra aviso
  if (heroes.length === 0) {
    container.innerHTML = "<p>Nenhum personagem encontrado.</p>";
    return;
  }

  // Para cada personagem encontrado, cria um card e adiciona ao container
  heroes.forEach((hero) => {
    const card = createHeroCard(hero);
    container.appendChild(card);
  });
});
