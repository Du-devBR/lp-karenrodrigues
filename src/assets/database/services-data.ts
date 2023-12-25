import imagemLinha from "@/../public/img-micropig.png";
import imagemHenna from "@/../public/img-henna.png";
import imagemLamination from "@/../public/img-lamination.png";
import imagemDespigmentacao from "@/../public/img-despigmentacao.png";
import { randomUUID } from "crypto";

export const listServices = {
  services: [
    // {
    //     id: randomUUID(),
    //     title: "sobrancelhas premium",
    //     card: [
          {
            id: randomUUID(),
            image: imagemLinha,
            name: "micropigmentação técnica shadow",
            description:
              "Achieve the perfect eyebrow shape with our professional shaping services. Our experienced eyebrow designers will assess your facial features and create a customized shape that enhances your natural beauty.",
          },
          {
            id: randomUUID(),
            image: imagemHenna,
            name: "designer personalizado Henna",
            description:
              "Achieve the perfect eyebrow shape with our professional shaping services. Our experienced eyebrow designers will assess your facial features and create a customized shape that enhances your natural beauty.",
          },
          {
            id: randomUUID(),
            image: imagemLamination,
            name: "designer tecnica Brown Lamination",
            description:
              "Achieve the perfect eyebrow shape with our professional shaping services. Our experienced eyebrow designers will assess your facial features and create a customized shape that enhances your natural beauty.",
          },
          {
            id: randomUUID(),
            image: imagemDespigmentacao,
            name: "Despigmentação de micropigmentação",
            description:
              "Achieve the perfect eyebrow shape with our professional shaping services. Our experienced eyebrow designers will assess your facial features and create a customized shape that enhances your natural beauty.",
          },
        ]

    // },
  // ]
}
