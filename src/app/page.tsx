import iconSobrancelhas from "@/../public/icon-sobrancelhas.png";
import imgSobre from "@/../public/bg-karen.png";
import imgMaps from "@/../public/maps-karen.png";
import imgDentro from "@/../public/dentro.png";
import imgFrente from "@/../public/frente.png";
import Image, { StaticImageData } from "next/legacy/image";
import Card from "./components/card";
import { getData } from "./actions";
import CarrouselServicos from "./slides/servicos";
import CarrouselEspaco from "./slides/espaco";
import { randomUUID } from "crypto";

export interface ServicosItem {
  id: string;
  image: StaticImageData;
  name: string;
  description: string;
}

export interface ServicosSection {
  id: string;
  title: string;
  card: ServicosItem[];
}

export interface ServicosData {
  servicos: [];
}

//

export interface Imagem {
  id: string;
  picture: StaticImageData;
}

interface EspacoSection {
  id: string;
  nome: string;
  imagens: Imagem[];
}

const arrayEspaco: EspacoSection = {
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

export default async function Home() {
  const data: ServicosData = await getData();
  const servicosSection: ServicosSection[] = data.servicos;

  return (
    <>
      <main id="sobre">
        <section className=" max-w-screen-2xl m-auto px-16 py-24 flex items-center gap-16 max-lg:flex-col max-md:px-4 max-md:py-8 max-md:mb-0 ">
          <div className="flex flex-col w-full gap-16 max-md:gap-6">
            <div className="flex flex-col gap-4 max-w-[571px]">
              <h1 className=" text-32 text-gray-1000 font-bold max-md:text-20">
                Designer Karen Rodrigues
              </h1>
              <p className=" text-16 font-light text-gray-700 max-md:text-14">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries Lorem Ipsum is simply dummy
                text of the printing and typesetting industry. Lorem Ipsum has
                been the industrys standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries
              </p>
            </div>
            <div className="flex flex-col w-full gap-6 max-w-[571px]">
              <div className="flex gap-10 items-center">
                <Image
                  src={iconSobrancelhas}
                  alt="desenho sobrancelha e uma pinça na cores da marca."
                />
                <div className="w-full">
                  <h2 className=" text-24 text-gray-1000 font-bold max-md:text-18">
                    Designer de Sobrancelhas
                  </h2>
                  <p className=" text-16 text-gray-700 font-light mt-2 mb-4 max-md:text-14">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the
                  </p>
                  <span className=" uppercase text-16 font-medium text-brand-1000">
                    Veja nossa galeria
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-full  max-h-[834px] bg-brand-800 rounded-[32px] pl-16 pr-4 pb-4 pt-4  ">
            <Image src={imgSobre} alt="Karen Rodrigues" />
          </div>
        </section>
      </main>
      <main id="servicos">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-8 max-md:gap-4">
          <h1 className="text-32 text-gray-1000 font-bold max-md:text-20 text-center capitalize ">
            Conheça nossos serviços
          </h1>
          <div className="">
            {servicosSection.map((servicos, index) => (
              <div key={index} className="flex flex-col gap-8 items-center">
                <h2 className=" text-24 text-gray-800 font-medium max-md:text-18 capitalize">
                  {servicos.title}
                </h2>
                <CarrouselServicos>
                  {servicos.card.map((item: ServicosItem) => (
                    <Card key={item.id} data={item} />
                  ))}
                </CarrouselServicos>
              </div>
            ))}
          </div>
        </section>
      </main>
      <main id="espaco">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-8 max-md:gap-4">
          <h1 className="text-32 text-gray-1000 font-bold max-md:text-20 text-center capitalize ">
            Conheça nosso espaço
          </h1>
          <div className="flex w-full justify-between gap-6 max-md:flex-col ">
            <div className="flex flex-col 2xl:w-2/6 ">
              <h2 className="text-32 text-gray-1000 font-bold mb-6 max-md:text-18 max-md:mb-4  leading-normal">
                Bem localizado, receptivo e atraente.
              </h2>
              <p className="text-32 text-gray-800 font-medium spece max-md:text-18 leading-normal">
                Estamos no coração de Brás Cubas em Mogi das Cruzes.
              </p>
            </div>
            <div className="w-full min-h-[372px] rounded-3xl overflow-hidden max-md:min-h-[255px] relative 2xl:w-2/4">
              <CarrouselEspaco>
                {arrayEspaco.imagens.map((imagens) => (
                  <Image
                    key={imagens.id}
                    src={imagens.picture}
                    alt=""
                    layout="fill"
                  />
                ))}
              </CarrouselEspaco>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
