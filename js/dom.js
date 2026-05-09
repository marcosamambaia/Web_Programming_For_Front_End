// Função que cria o card visual de cada personagem
export function createHeroCard(hero) {
  // Cria um elemento <div> que será o card
  const card = document.createElement("div");
  card.className = "card"; // adiciona a classe CSS "card"

  // Cria o título com o nome do personagem
  const nameElement = document.createElement("h2");
  nameElement.textContent = hero.Nombre;

  // Cria a imagem do personagem
  const imageElement = document.createElement("img");
  imageElement.alt = hero.Nombre; // texto alternativo para acessibilidade
  // Se a API tiver imagem, usa; senão, usa um placeholder local
  imageElement.src = hero.Imagen || "assets/images/placeholder.png";

  // Cria o parágrafo com a ocupação
  const occupationElement = document.createElement("p");
  occupationElement.textContent = `Ocupação: ${hero.Ocupacion || "N/A"}`;

  // Cria o parágrafo com o estado (vivo, morto, etc.)
  const stateElement = document.createElement("p");
  stateElement.textContent = `Estado: ${hero.Estado || "N/A"}`;

  // Adiciona todos os elementos dentro do card
  card.appendChild(nameElement);
  card.appendChild(imageElement);
  card.appendChild(occupationElement);
  card.appendChild(stateElement);

  // Retorna o card pronto para ser exibido
  return card;
}
