const TOKEN = "0532e636d30e78cc901d934904503bc1"; // seu token
const BASE_URL = `https://superheroapi.com/api.php/${TOKEN}`;

export async function searchHero(name) {
  try {
    const response = await fetch(`${BASE_URL}/search/${name}`);
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error("Erro ao buscar herói:", error);
    return [];
  }
}
