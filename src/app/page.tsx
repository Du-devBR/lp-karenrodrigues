import iconSobrancelhas from "@/../public/icon-sobrancelhas.png";
import iconHydra from "@/../public/icon-hydra.png";

import Image from "next/legacy/image";

export default function Home() {
  return (
    <section id="sobre">
      <main className=" px-16 py-10 flex justify-between gap-16">
        <div className="flex flex-col gap-4 w-full">
          <h1 className=" text-32 text-gray-1000 font-bold">
            Designer Karen Rodrigues
          </h1>
          <p className=" text-16 font-light text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries Lorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industrys
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries
          </p>
        </div>
        <div className=" w-1 min-h-full bg-brand-1000"></div>
        <div className="flex flex-col w-full">
          <div className="flex gap-10 items-center">
            <Image
              src={iconSobrancelhas}
              alt="desenho sobrancelha e uma pinça na cores da marca."
            />

            <div className="w-full">
              <h2 className=" text-24 text-gray-1000 font-bold">
                Designer de Sobrancelhas
              </h2>
              <p className=" text-16 text-gray-700 font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the
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
              <h2 className=" text-24 text-gray-1000 font-bold">
                Designer de Sobrancelhas
              </h2>
              <p className=" text-16 text-gray-700 font-light">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the
              </p>
              <span className=" uppercase text-16 font-medium text-brand-1000">
                Veja nossa galeria
              </span>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
