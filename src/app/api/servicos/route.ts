import { arrayServicosSobrancelhas } from "@/assets/data"

export async function GET(){
  const res = {
    json: () => Promise.resolve(arrayServicosSobrancelhas)
  };
  const data = await res.json();
  return Response.json(data)
}
