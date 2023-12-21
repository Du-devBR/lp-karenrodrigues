const API_URL = process.env.BASE_URL

export async function getDataServices() {
  const revalidarDadosACada24Horas = 5
  const res = await fetch(`${API_URL}/servicesPage`, {next: {revalidate: revalidarDadosACada24Horas}});

  const data = await res.json()
  return data;
}
