import Image from "next/legacy/image";

import logo from "@/../public/logotipo.png";
import iconInstagram from "@/../public/instagram.svg";
import iconWhatsapp from "@/../public/whatsapp.svg";
import iconFacebook from "@/../public/facebook.svg";
import { menuNavList } from "@/assets/database/menu-data";
import Link from "next/link";
import ButtonCta from "./ui/button-cta";
import { listButtonCta } from "@/assets/database/button-cta-data";

export default function Footer() {
  return (
    <section className="bg-gray-900 w-full h-full">
      <div className="max-w-screen-2xl m-auto pt-16  px-16 flex flex-col max-md:px-4 max-md:pt-10">
        <div className=" max-md:self-center">
          <Image src={logo} alt="" />
        </div>
        <div className=" flex justify-between gap-8 flex-wrap-reverse mt-8 max-md:mt-4 max-md:gap-4">
          <div className="flex flex-col">
            <h2 className="text-20 text-gray-100 font-bold mb-4 max-md:text-14">
              Mapa do site
            </h2>
            {menuNavList.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="text-16 text-gray-300 font-light mb-2 capitalize hover:text-brand-800 duration-500"
              >
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h2 className="text-20 text-gray-100 font-bold mb-4 max-md:text-14">
              Contato
            </h2>
            <span className="text-16 text-gray-300 font-light mb-2 capitalize">
              email@gmail.com
            </span>
            <span className="text-16 text-gray-300 font-light mb-2 capitalize">
              11 123456789
            </span>
          </div>
          <div className="flex flex-col items-start">
            <h2 className="text-20 text-gray-100 font-bold mb-4 max-md:text-14">
              Localização
            </h2>
            <span className="text-16 text-gray-300 font-light mb-2 capitalize">
              Rua Lorem, 1 Mogi das Cruzes - SP
            </span>
            <ButtonCta data={listButtonCta.location} />
          </div>
          <div className="flex flex-col max-md:m-auto">
            <h2 className="text-20 text-gray-100 font-bold mb-4 max-md:text-14">
              Siga nossas redes sociais
            </h2>
            <div className="flex items-center justify-between max-md:gap-4 ">
              <a href="http://">
                <Image
                  src={iconInstagram}
                  alt="logotipo instagram simboliando uma camera fotografica."
                  width={40}
                  height={40}
                />
              </a>
              <a href="http://">
                <Image
                  src={iconWhatsapp}
                  alt="logotipo whatsapp circulo na cor verde e icone de telegone ao centro do circulo"
                  width={40}
                  height={40}
                />
              </a>
              <a href="http://">
                <Image
                  src={iconFacebook}
                  alt="logotipo facebook circulo azul com a letra F ao centro do circulo"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
        <Link
          href={"/#inicio"}
          className="w-[40px] h-[40px] bg-brand-800 self-end my-4 rounded-sm items-center justify-center flex duration-500 cursor-pointer hover:bg-brand-1000 hover:animate-pulse"
        >
          <span className="h-[20px] w-1 bg-gray-800 rotate-[30deg] m-[2px] rounded-sm"></span>
          <span className="h-[20px] w-1 bg-gray-800 rotate-[-30deg] m-[2px] rounded-sm"></span>
        </Link>
        <div className="py-3 text-center border-t-2 border-gray-100 ">
          <span className="text-14 text-gray-100 font-light max-md:text-10">
            Karen Rodrigues 2024 - Todos os direitos reservados | Criado e
            desenvolvido por Eduardo Ananias
          </span>
        </div>
      </div>
    </section>
  );
}
