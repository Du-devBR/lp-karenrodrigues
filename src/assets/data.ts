
import imagemLinha from "@/../public/img-micropig.png";
import imagemHenna from "@/../public/img-henna.png";
import imagemLamination from "@/../public/img-lamination.png";
import imagemDespigmentacao from "@/../public/img-despigmentacao.png";
import { randomUUID } from "crypto";


export const arrayServicos = {
  servicos: [
    {
        id: randomUUID(),
        title: "sobrancelhas premium",
        card: [
          {
            id: randomUUID(),
            image: imagemLinha,
            name: "micropigmentação técnica shadow",
            description:
              "Type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          },
          {
            id: randomUUID(),
            image: imagemHenna,
            name: "designer personalizado Henna",
            description:
              "Type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          },
          {
            id: randomUUID(),
            image: imagemLamination,
            name: "designer tecnica Brown Lamination",
            description:
              "Type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          },
          {
            id: randomUUID(),
            image: imagemDespigmentacao,
            name: "Despigmentação de micropigmentação",
            description:
              "Type and scrambled it to make a type specimen book. It has survived not only five centuries.",
          },
        ]

    },
  ]
}
