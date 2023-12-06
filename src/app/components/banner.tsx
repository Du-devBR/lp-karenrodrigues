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
    </div>
  );
}
