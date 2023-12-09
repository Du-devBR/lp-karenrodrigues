export async function getData() {
  const res = await fetch("http://localhost:3000/api/servicos");

  const data = await res.json()

  return data;
}
