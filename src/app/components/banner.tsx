import Image from "next/legacy/image";
import banner from "../../../public/banner.svg";
import Header from "./header";

export default function Banner() {
  return (
    <div id="inicio" className="w-full relative">
      <Image
        src={banner}
        layout="fill"
        objectFit="cover"
        loading="lazy"
        alt="Banner com 100% da tela, rosto feminino com olhar fixa para cima, olhos castanhos e sobrancelhas definidas."
      />
      <Header />
      <div className="flex flex-col gap-4 max-w-screen-2xl m-auto relative p-16  min-h-[calc(100vh_-_90px)] max-md:px-4  justify-center">
        <span className="max-md:text-banner_sm md:text-32 text-gray-100 font-bold">
          Designer
        </span>
        <h1 className="max-md:text-banner_md md:text-banner_lg font-bold text-gray-100 uppercase first-line:text-brand-800">
          Sobrancelhas <br /> & labios
        </h1>
        <p className="max-md:text-16 md:text-32 text-gray-100 font-bold">
          Toda a técnica de Karen Rodrigues
        </p>
      </div>
    </div>
  );
}
