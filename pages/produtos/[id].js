export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          id: "1gilmar"
        }
      },{
				params:{
					id: "jiraspiom"
				}
			}
    ],
		//false so aceita requiciçao do paremetro acima
		//true pega toda as requisição
		//blocking gera asyncrono
    fallback: 'blocking', //true // blocking
  };
}

export async function getStaticProps(context) {
	await delay(5000);

  const id = context.params.id;

  return {
    props: {
      id: id,
    },
  };
}

function Produtos(props) {
  return <div>Id do produto {props.id}</div>;
}

function delay(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}

export default Produtos;
