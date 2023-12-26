import iconSobrancelhas from "@/../public/icon-sobrancelhas.png";
import imgSobre from "@/../public/bg-karen.png";
import Image from "next/legacy/image";
import CardDepoimento from "../components/card-depoimento";
import { ButtonContact } from "../components/ui/button-contact";
import CarrouselServices from "@/components/slides/carrousel-service";
import CarrouselLocation from "@/components/slides/carrousel-location";
import CarrouselComments from "@/components/slides/carrousel-comment";
import { listContacts } from "@/assets/database/contacts-data";
import { listImagensLocation } from "@/assets/database/location-data";
import { getDataServices } from "./util/getDataservicesApi";
import { getDataComments } from "./util/getDataCommentsApi";
import ButtonCta from "@/components/ui/button-cta";
import { listButtonCta } from "@/assets/database/button-cta-data";
import CardSlideService from "../components/card-slide-services";
import CardService from "@/components/card-service";

export default async function Home() {
  const dataServices: ServiceData = await getDataServices();
  const dataComments = await getDataComments();
  const servicesSection: ServiceItem[] = dataServices.services;

  return (
    <>
      <main id="about" className="bg-gray-0">
        <section className=" max-w-screen-2xl m-auto px-16 py-24 flex items-center gap-16 max-lg:flex-col max-md:px-4 max-md:pt-16 pb-8 max-md:mb-0 relative">
          {/* <svg
            viewBox="0 0 1024 1024"
            className="  absolute h-[45rem] w-[45rem] max-lg:h-[25rem] max-lg:w-[25rem] max-lg:top-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fillOpacity="0.7"
            />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#EB9D89" />
                <stop offset="10" stopColor="#FFCABD" />
              </radialGradient>
            </defs>
          </svg> */}
          <div className="flex flex-col w-full gap-16 max-md:gap-6 ">
            <div className="flex flex-col gap-6 max-w-[571px] max-md:text-center ">
              <h1 className=" text-40 text-gray-900 font-bold max-md:text-32">
                Karen Rodrigues especialista em Sobrancelhas
              </h1>
              <cite className="text-24 text-gray-500 font-light max-md:text-20">
                “ Amo testemunhar o sorriso iluminar o rosto das pessoas depois
                que concluo o design de sobrancelhas, sabendo que pude realçar
                sua beleza e confiança. ”
              </cite>
              <p className=" text-16 font-light text-gray-800 ">
                Com anos de experiência e paixão por realçar a beleza natural,
                eu, como designer de sobrancelhas, adoto uma abordagem
                personalizada para criar sobrancelhas deslumbrantes que
                complementam perfeitamente suas características únicas.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center w-full  max-h-[834px] bg-brand-800 rounded-[32px] pl-16 pr-4 pb-4 pt-4  ">
            <Image src={imgSobre} alt="Karen Rodrigues" />
          </div>
        </section>
      </main>
      <main id="services" className="bg-gray-0">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex items-center justify-between max-lg:flex-col  gap-16 max-md:px-4 max-md:py-8  ">
          <div className="flex flex-col gap-8 w-full ">
            {servicesSection.map((service) => (
              <CardService key={service.id} data={service} />
            ))}
          </div>
          <CarrouselServices>
            {servicesSection.map((service) => (
              <CardSlideService key={service.id} data={service} />
            ))}
          </CarrouselServices>
        </section>
      </main>
      <main id="location" className="bg-gray-0">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-8 max-md:gap-4">
          <h1 className="text-32 text-gray-1000 font-bold max-md:text-20 text-center capitalize ">
            Conheça nosso espaço
          </h1>
          <div className="flex w-full justify-between gap-6 max-md:flex-col ">
            <div className="flex flex-col 2xl:w-2/6 items-start">
              <h2 className="text-32 text-gray-1000 font-bold mb-6 max-md:text-18 max-md:mb-4  leading-normal max-md:text-center">
                Bem localizado, receptivo e atraente.
              </h2>
              <p className="text-32 text-gray-800 font-medium spece mb-4 max-md:text-18 max-md:mb-2 leading-normal">
                Estamos no coração de Brás Cubas em Mogi das Cruzes.
              </p>
              <span className="text-20 text-gray-800 font-medium spece max-md:text-14  leading-normal mb-8">
                Rua Thuller, 467 - Jardim Universo, Mogi das Cruzes - SP,
                08740-470
              </span>
              <ButtonCta data={listButtonCta.location} />
            </div>
            <div className="w-full min-h-[372px] rounded-3xl overflow-hidden max-md:min-h-[255px] relative 2xl:w-2/4">
              <CarrouselLocation>
                {listImagensLocation.imagens.map((imagens) => (
                  <Image
                    key={imagens.id}
                    src={imagens.picture}
                    alt=""
                    layout="fill"
                  />
                ))}
              </CarrouselLocation>
            </div>
          </div>
        </section>
      </main>
      <main id="comments" className="bg-gray-0">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-8 max-md:gap-4">
          <h1 className="text-32 text-gray-1000 font-bold max-md:text-20 text-center">
            O que nossos clientes dizem
          </h1>
          <cite className=" text-center text-14 text-gray-800">
            Nossos corações se aquecem com o amor dos nossos clientes; nossa
            maior satisfação reside em transformar vidas, demonstrando que todos
            nós somos verdadeiramente maravilhosos.Nossos corações se aquecem
            com o amor dos nossos clientes; nossa maior satisfação reside em
            transformar vidas, demonstrando que todos nós somos verdadeiramente
            maravilhosos.
          </cite>
          <CarrouselComments>
            {dataComments.map((depoimento: CommentItem) => (
              <CardDepoimento key={depoimento.id} data={depoimento} />
            ))}
          </CarrouselComments>
        </section>
      </main>
      <main id="contact" className="bg-brand-200">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-8 max-md:gap-4 ">
          <h1 className="text-32 text-gray-1000 font-bold max-md:text-20 text-center">
            Entre em contato
          </h1>
          <p className="text-center text-16 text-gray-700 font-medium">
            Agende agora mesmo pelo nosso whatsapp e acesse nosso instragram
            para conhecer um pouco mais do nosso trabalho.
          </p>
          <div className="flex items-center justify-center gap-8 max-md:gap-4">
            {listContacts.map((contact) => (
              <ButtonContact key={contact.id} data={contact} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
