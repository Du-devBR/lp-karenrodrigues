import Image from "next/legacy/image";

import logo from "@/../public/logotipo.png";
import iconInstagram from "@/../public/intagram.svg";
import iconWhatsapp from "@/../public/whatsapp.svg";
import iconFacebook from "@/../public/facebook.svg";
import { arrayMenu } from "@/assets/menu-data";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-gray-900 w-full h-full">
      <div className="max-w-screen-2xl m-auto p-16 flex flex-col max-md:px-4">
        <div className="max-md:w-[60px] max-md:self-center">
          <Image src={logo} alt="" />
        </div>
        <div className=" flex justify-between gap-8 flex-wrap-reverse ">
          <div className="flex flex-col">
            <h2 className="text-20 text-gray-100 font-bold">Mapa do site</h2>
            {arrayMenu.map((item, index) => (
              <Link key={index} href={item.href}>
                {item.title}
              </Link>
            ))}
          </div>
          <div className="flex flex-col">
            <h2 className="text-20 text-gray-100 font-bold">Contato</h2>
            <span>email@gmail.com</span>
            <span>11 123456789</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-20 text-gray-100 font-bold">Localização</h2>
            <span>Rua Lorem, 1 Mogi das Cruzes - SP</span>
          </div>
          <div className="flex flex-col">
            <h2 className="text-20 text-gray-100 font-bold">
              Siga nossas redes sociais
              <div className="flex gap-10 items-center justify-between w-full">
                <a href="http://">
                  <Image
                    src={iconInstagram}
                    alt="logotipo instagram simboliando uma camera fotografica."
                    width={60}
                    height={60}
                  />
                </a>
                <a href="http://">
                  <Image
                    src={iconWhatsapp}
                    alt="logotipo whatsapp circulo na cor verde e icone de telegone ao centro do circulo"
                    width={60}
                    height={60}
                  />
                </a>
                <a href="http://">
                  <Image
                    src={iconFacebook}
                    alt="logotipo facebook circulo azul com a letra F ao centro do circulo"
                    width={60}
                    height={60}
                  />
                </a>
              </div>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
