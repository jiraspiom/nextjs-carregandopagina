async function tempo(request, response) {
  const secret = process.env.API_KEY_SECRETA;
  const dataDinamica = new Date();

  const sub = await fetch(`https://api.github.com/users/1gilmar/starred`);
  
  const subjson = await sub.json();
  const nome = subjson;

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.json({
    nome: nome[1].name,
    descricao: nome[1].description,
    data: dataDinamica.toGMTString()
  });
}

export default tempo;
