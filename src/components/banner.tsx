import Image from "next/legacy/image";
import banner from "../../public/banner.svg";
import Header from "./header";
import ButtonCta from "./ui/button-cta";
import { listButtonCta } from "@/assets/database/button-cta-data";

export default function Banner() {
  return (
    <div id="inicio" className="w-full relative overflow-hidden  ">
      <div className="">
        <Image
          src={banner}
          layout="fill"
          objectFit="cover"
          loading="lazy"
          alt="Banner com 100% da tela, rosto feminino com olhar fixa para cima, olhos castanhos e sobrancelhas definidas."
        />
      </div>
      <Header />
      <div className="flex flex-col max-w-screen-2xl  m-auto relative p-16  min-h-[calc(100vh_-_90px)] max-md:px-4  justify-center items-start ">
        <div className="max-w-[600px] flex flex-col gap-4 justify-center items-start max-md:gap-2 relative rounded-md  ">
          <span className="max-md:text-20 md:text-32 text-gray-100 font-bold ">
            Designer
          </span>
          <h1 className="max-md:text-40 text-banner_lg font-bold uppercase text-brand-1000 ">
            Sobrancelhas
          </h1>
          <p className="max-md:text-14 text-16 text-gray-100 mb-4 ">
            Obtenha o formato de sobrancelha perfeito e realce sua beleza
            natural com nosso designer de sobrancelhas profissional. Marque uma
            consulta hoje!
          </p>
          <div className="flex gap-4">
            <ButtonCta data={listButtonCta.services} styleColor={"secundary"} />
            <ButtonCta data={listButtonCta.schedule} />
          </div>
        </div>
      </div>
    </div>
  );
}
