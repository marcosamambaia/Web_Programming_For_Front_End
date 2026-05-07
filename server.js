// Importa os pacotes necessários
import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;

// Rota do proxy para imagens
app.get("/proxy-image", async (req, res) => {
  // Pega a URL original da imagem passada como parâmetro
  const imageUrl = req.query.url;

  try {
    // Faz a requisição da imagem no servidor original
    const response = await fetch(imageUrl);

    // Se a resposta não for OK, retorna erro
    if (!response.ok) {
      return res.status(500).send("Erro ao buscar imagem");
    }

    // Copia todos os cabeçalhos originais da resposta (ex: content-type, cache-control)
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });

    // Converte os bytes da imagem para Buffer e envia ao navegador
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));

  } catch (error) {
    // Caso ocorra algum erro na requisição
    console.error("Erro no proxy:", error);
    res.status(500).send("Erro no proxy");
  }
});

// Inicia o servidor na porta 3000
app.listen(PORT, () => {
  console.log(`✅ Proxy rodando em http://localhost:${PORT}`);
});
