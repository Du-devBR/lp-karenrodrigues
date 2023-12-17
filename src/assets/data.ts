
import imagemLinha from "@/../public/img-micropig.png";
import imagemHenna from "@/../public/img-henna.png";
import imagemLamination from "@/../public/img-lamination.png";
import imagemDespigmentacao from "@/../public/img-despigmentacao.png";
import { randomUUID } from "crypto";
import { DepoimentoItem } from "@/app/page";


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


export const arrayDepoimentos: DepoimentoItem[] = [
  {
    id: randomUUID(),
    image: "b",
    descricao:
      "Não conhecia o trabalho da Karen, fui ao studio por conta das avaliações aqui do Google. E olha, SUPER INDICO. Ambiente muito agradável, foi super pontual e o trabalho maravilhoso. Eu e minha mãe amamos. ESTAMOS MUITO SATISFEITAS. Se pudéssemos dar 10 estrelas, daríamos 😉",
    nome: "Bianca Souza",
  },
  {
    id: randomUUID(),
    image: "L",
    descricao:
      "Atendimento personalizado. Localização ótima… O espaço é super aconchegante e Cute♥️… Karen super pontual é a design de sobrancelha mais delicada que ja fui…. Mãos de fada",
    nome: "Ligia Nepomuceno",
  },
  {
    id: randomUUID(),
    image: "H",
    descricao:
      "Profissionalismo de ponta, lugar aconchegante, fora os serviços que são  impecáveis. Me sinto renovada quando faço as unhas com a Gabriela, apaixonada pelo trabalho dela… minhas unhas ficam perfeitas e duram a semana toda. Parabéns meninas!! ❤️",
    nome: "Helen Costa",
  },
  {
    id: randomUUID(),
    image: "K",
    descricao:
      "Além dos serviços relacionados acima, também já fiz colocação de cilios com a Larissa e simplesmente amei, ambiente aconchegante, profissionais de altíssima qualidade , recepção excelente, quem puder conhecer não irá se arrepender! Gabi, Karen, Vitória e Larissa estão de parabéns!",
    nome: "Kelly Gomes",
  },
];
