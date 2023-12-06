import Image from "next/image";
import banner from "../../../public/banner.svg";

export default function Banner() {
  return (
    <div className="w-full min-h-screen">
      <Image
        src={banner}
        layout="fill"
        objectFit="cover"
        alt="Banner com 100% da tela, rosto feminino com olhar fixa para cima, olhos castanhos e sobrancelhas definidas."
      />
    </div>
  );
}
