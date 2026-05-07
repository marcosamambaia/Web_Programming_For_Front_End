// Função responsável por montar o card de cada herói
export function createHeroCard(hero) {
  // Cria o container principal do card
  const card = document.createElement("div");
  card.className = "card";

  // Nome do herói
  const nameElement = document.createElement("h2");
  nameElement.textContent = hero.name;

  // Imagem do herói
  const imageElement = document.createElement("img");
  // Se a API retornar uma URL de imagem, usamos o proxy para evitar bloqueio CORP/CORS
  // Caso contrário, usamos um placeholder local
  imageElement.src = hero.image?.url
    ? `http://localhost:3000/proxy-image?url=${encodeURIComponent(hero.image.url)}`
    : "assets/images/placeholder.png";
  imageElement.alt = hero.name;

  // Estatísticas principais (força e inteligência)
  const statsElement = document.createElement("p");
  statsElement.textContent = `Força: ${hero.powerstats.strength} | Inteligência: ${hero.powerstats.intelligence}`;

  // Informações adicionais (publisher)
  const bioElement = document.createElement("p");
  bioElement.textContent = `Publisher: ${hero.biography.publisher}`;

  // Monta o card adicionando os elementos criados
  card.appendChild(nameElement);
  card.appendChild(imageElement);
  card.appendChild(statsElement);
  card.appendChild(bioElement);

  // Retorna o card pronto para ser exibido na página
  return card;
}
