import { randomUUID } from "node:crypto";

import imgMaps from "@/../public/maps-karen.png";
import imgDentro from "@/../public/dentro.png";
import imgFrente from "@/../public/frente.png";

export const listImagensLocation: LocationSection = {
  id: randomUUID(),
  nome: "espaco",
  imagens: [
    {
      id: randomUUID(),
      picture: imgMaps,
    },
    {
      id: randomUUID(),
      picture: imgDentro,
    },
    {
      id: randomUUID(),
      picture: imgFrente,
    },
  ],
};
