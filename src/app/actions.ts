import getConfig from "next/config";

const {publicRuntimeConfig } = getConfig()
const API_URL = publicRuntimeConfig.API_URL

export async function getDataServicos() {
  const revalidarDadosACada24Horas = 5
  const res = await fetch(`${API_URL}/servicos`, {next: {revalidate: revalidarDadosACada24Horas}});

  const data = await res.json()
  return data;
}

export async function getDataDepoimentos() {
  const revalidarDadosACada24Horas = 5
  const res = await fetch(`${API_URL}/depoimentos`, {next: {revalidate: revalidarDadosACada24Horas}});

  const data = await res.json()
  return data;
}
