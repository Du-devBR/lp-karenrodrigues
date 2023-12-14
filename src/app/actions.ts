
export async function getData() {
  const revalidarDadosACada24Horas = 5
  const res = await fetch("http://localhost:3000/api/servicos", {next: {revalidate: revalidarDadosACada24Horas}});

  const data = await res.json()
  return data;
}
