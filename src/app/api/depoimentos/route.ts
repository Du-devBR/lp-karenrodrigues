import { arrayDepoimentos} from "@/assets/data"

/**
   * Esta função chama o objeto arrayServicos, do arquivo data.ts.
   * Futuramente deve-se alterar esse trecho de codigo por uma chamada fetch a uma api externa
   *
   * @async
   * @function
   * @returns {Response.JSON()}
   * @throws {Error}
  */

export async function GET(){


  try {
  // Variável para simular a resposta de uma API externa
    const res = {
      json: () => Promise.resolve(arrayDepoimentos)
    };

  // Descomentar o trecho de código abaixo ao implementar a chamada fetch real
   {/* const res = await fetch("api_de_servicos", {
        next:
        {
          revalidate: 'tempo para revalidar os dados'
        }
      })
    */}

    const data = await res.json();
    return Response.json(data)

  } catch (error) {
    throw error
  }
}
