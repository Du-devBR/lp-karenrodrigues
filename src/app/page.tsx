import iconSobrancelhas from "@/../public/icon-sobrancelhas.png";
import imgSobre from "@/../public/bg-karen.png";
import Image, { StaticImageData } from "next/legacy/image";
import Card from "./components/card";
import { getData } from "./actions";
import Carousel from "./slides/page";

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

export default async function Home() {
  const data: ServicosData = await getData();
  const servicosSection: ServicosSection[] = data.servicos;

  return (
    <>
      <main id="sobre">
        <section className=" px-16 py-16 flex items-center gap-16 max-lg:flex-col max-md:px-4 max-md:mb-0">
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
          <div className="flex items-center justify-center w-full  max-h-[834px] bg-brand-800 rounded-[32px] pl-16 pr-4 pb-4 pt-4 ">
            <Image src={imgSobre} alt="Karen Rodrigues" />
          </div>
        </section>
      </main>
      <main id="servicos">
        <section className="px-16 py-10 flex flex-col gap-10 max-md:px-4 max-md:gap-4">
          <h1 className="text-32 text-gray-1000 font-bold max-md:text-20 text-center">
            Conheça nosso serviços
          </h1>
          <div>
            <Carousel />
            {servicosSection.map((servicos, index) => (
              <div key={index} className="flex flex-col gap-8 items-center">
                <h2 className=" text-24 text-gray-800 font-medium max-md:text-18">
                  {servicos.title}
                </h2>
                <Carousel>
                  {servicos.card.map((item: ServicosItem) => (
                    <Card key={item.id} data={item} />
                  ))}
                </Carousel>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
