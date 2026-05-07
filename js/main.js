// Importa as funções de outros arquivos
import { searchHero } from "./api.js";      // função que busca heróis na API
import { createHeroCard } from "./dom.js";  // função que cria o card no DOM

// Seleciona elementos da página
const container = document.getElementById("cards-container"); // onde os cards vão aparecer
const input = document.getElementById("hero-input");          // campo de texto para digitar o nome
const button = document.getElementById("search-btn");         // botão "Buscar"

// Função principal que carrega os heróis
async function loadHeroes(name) {
    container.innerHTML = ""; // limpa antes de buscar

    try {
        console.log("🔎 Buscando herói:", name);

        const heroes = await searchHero(name);
        console.log("📦 Retorno da API:", heroes);

        if (!heroes || heroes.length === 0) {
            console.warn("⚠️ Nenhum herói encontrado!");
            const msg = document.createElement("p");
            msg.textContent = "Herói não encontrado!";
            container.appendChild(msg);
            return;
        }

        heroes.forEach(hero => {
            console.log("🦸 Objeto completo:", hero);
            const card = createHeroCard(hero);
            container.appendChild(card);
        });

    } catch (error) {
        console.error("❌ Erro ao acessar a API:", error);

        // Mensagem clara na página
        const msg = document.createElement("p");
        msg.textContent = "⚠️ Não foi possível acessar a API. Verifique sua conexão com a internet.";
        msg.style.color = "red"; // destaque em vermelho
        container.appendChild(msg);
    }
}




// Evento de clique no botão "Buscar"
button.addEventListener("click", () => {
    const heroName = input.value.trim(); // pega o texto digitado
    console.log("🖱️ Clique em buscar:", heroName); // debug
    if (heroName) {
        loadHeroes(heroName); // chama a função principal
    }
});

// Evento de pressionar Enter no campo de texto
input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        const heroName = input.value.trim(); // pega o texto digitado
        console.log("⌨️ Enter pressionado:", heroName); // debug
        if (heroName) {
            loadHeroes(heroName); // chama a função principal
        }
    }
});
