import { randomUUID } from "node:crypto";

export const listComments: CommentItem[] = [
  {
    id: randomUUID(),
    image: "b",
    description:
      "Não conhecia o trabalho da Karen, fui ao studio por conta das avaliações aqui do Google. E olha, SUPER INDICO. Ambiente muito agradável, foi super pontual e o trabalho maravilhoso. Eu e minha mãe amamos. ESTAMOS MUITO SATISFEITAS. Se pudéssemos dar 10 estrelas, daríamos 😉",
    name: "Bianca Souza",
  },
  {
    id: randomUUID(),
    image: "L",
    description:
      "Atendimento personalizado. Localização ótima… O espaço é super aconchegante e Cute♥️… Karen super pontual é a design de sobrancelha mais delicada que ja fui…. Mãos de fada",
    name: "Ligia Nepomuceno",
  },
  {
    id: randomUUID(),
    image: "H",
    description:
      "Profissionalismo de ponta, lugar aconchegante, fora os serviços que são  impecáveis. Me sinto renovada quando faço as unhas com a Gabriela, apaixonada pelo trabalho dela… minhas unhas ficam perfeitas e duram a semana toda. Parabéns meninas!! ❤️",
    name: "Helen Costa",
  },
  {
    id: randomUUID(),
    image: "K",
    description:
      "Além dos serviços relacionados acima, também já fiz colocação de cilios com a Larissa e simplesmente amei, ambiente aconchegante, profissionais de altíssima qualidade , recepção excelente, quem puder conhecer não irá se arrepender! Gabi, Karen, Vitória e Larissa estão de parabéns!",
    name: "Kelly Gomes",
  },
];
