
export async function getDataServicos() {
  const revalidarDadosACada24Horas = 5
  const res = await fetch("http://localhost:3000/api/servicos", {next: {revalidate: revalidarDadosACada24Horas}});

  const data = await res.json()
  return data;
}

export async function getDataDepoimentos() {
  const revalidarDadosACada24Horas = 5
  const res = await fetch("http://localhost:3000/api/depoimentos", {next: {revalidate: revalidarDadosACada24Horas}});

  const data = await res.json()
  return data;
}
