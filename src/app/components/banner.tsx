import Image from "next/legacy/image";
import banner from "../../../public/banner.svg";
import Header from "./header";

export default function Banner() {
  return (
    <div className="w-full min-h-screen relative">
      <Image
        src={banner}
        layout="fill"
        objectFit="cover"
        alt="Banner com 100% da tela, rosto feminino com olhar fixa para cima, olhos castanhos e sobrancelhas definidas."
      />
      <Header />
      <div className=" max-md:px-4 absolute top-28 p-16 w-full min-h-[calc(100vh_-_112px)] justify-center flex flex-col gap-4">
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
