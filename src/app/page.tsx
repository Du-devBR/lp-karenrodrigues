import iconSobrancelhas from "@/../public/icon-sobrancelhas.png";
import iconHydra from "@/../public/icon-hydra.png";

import Image from "next/legacy/image";

export default function Home() {
  return (
    <>
      <main id="sobre">
        <section className=" px-16 py-10 mb-16 flex justify-between gap-16 max-lg:flex-col max-md:px-4 max-md:mb-0">
          <div className="flex flex-col gap-4 w-full">
            <h1 className=" text-32 text-gray-1000 font-bold max-md:text-20">
              Designer Karen Rodrigues
            </h1>
            <p className=" text-16 font-light text-gray-700 max-md:text-14">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries Lorem Ipsum is simply dummy text
              of the printing and typesetting industry. Lorem Ipsum has been the
              industrys standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries
            </p>
          </div>
          <div className=" w-1 min-h-full bg-brand-1000 max-lg:hidden"></div>
          <div className="flex flex-col w-full gap-6">
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
            <div className="flex gap-10 items-center">
              <Image
                src={iconHydra}
                alt="desenho de um hidratante labial na cor da marca."
              />
              <div className="w-full">
                <h2 className=" text-24 text-gray-1000 font-bold max-md:text-18">
                  Hydra Gloss Lips
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
        </section>
      </main>
      <main id="servicos">
        <section className="px-16 py-10 flex flex-col gap-10 items-center max-md:px-4 max-md:gap-4">
          <h1 className="text-32 text-gray-1000 font-bold max-md:text-20">
            Conheça nosso serviços
          </h1>
          <div className="flex flex-col gap-8 items-center">
            <h2 className=" text-24 text-gray-800 font-medium max-md:text-18">
              Sobrancelhas Premium
            </h2>
          </div>
        </section>
      </main>
    </>
  );
}
