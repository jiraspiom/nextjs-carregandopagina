async function tempo(request, response) {
  const secret = process.env.API_KEY_SECRETA;
  const dataDinamica = new Date();

  const usuario = request.query.id;

  const res = await fetch(`https://api.github.com/users/${usuario}/starred`);

  const subres = await res.json();
  const nome = subres;

  var teste = nome.map(function (elem) {
    return {
      nome: elem.name,
      descricao: elem.description ?? "",
    };
  });

  response.setHeader("Cache-Control", "s-maxage=10, stale-while-revalidate");

  response.json({
    data: dataDinamica.toGMTString(),
    nome_usuario: usuario,    
    projetoEstrela: teste,
  });
}

export default tempo;
