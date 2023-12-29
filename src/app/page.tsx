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
import AboutSection from "./_component/about-section";

export default async function Home() {
  const dataServices: ServiceData = await getDataServices();
  const dataComments = await getDataComments();
  const servicesSection: ServiceItem[] = dataServices.services;

  return (
    <>
      <AboutSection />
      <main id="services" className="bg-gray-0">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex items-center flex-row-reverse justify-between max-lg:flex-col  gap-16 max-md:px-4 max-md:py-8  ">
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
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col justify-between gap-16 max-md:px-4 max-md:py-8 max-md:gap-4">
          <div className="flex w-full justify-between gap-16  max-md:flex-col ">
            <div className="flex w-full flex-col items-start max-md:items-center max-md:text-center  ">
              <h2 className="text-32 text-gray-900 font-semibold max-md:text-24 mb-6 max-md:mb-4  leading-normal ">
                Somos um espaço bem localizado, receptivo e atraente.
              </h2>
              <p className="text-16 text-gray-800 font-medium spece mb-4 max-md:text-18 max-md:mb-2 leading-normal">
                Nosso espaço é todo equipado para trazer o maximo de conforto a
                nossos clientes, fzendo com que se sinta em casa, todo o
                ambiente foi pensado em nossos cliente. Venha nos conhecer,
                estamos no coração de Brás Cubas em Mogi das Cruzes.
              </p>
              <span className="text-16 text-gray-800 font-medium spece max-md:text-14  leading-normal mb-8">
                Rua Thuller, 467 - Jardim Universo, Mogi das Cruzes - SP,
                08740-470
              </span>
              <ButtonCta data={listButtonCta.location} />
            </div>
            <div className="w-full min-h-[372px]  overflow-hidden max-md:min-h-[255px] relative ">
              <CarrouselLocation>
                {listImagensLocation.imagens.map((imagens) => (
                  <Image
                    key={imagens.id}
                    src={imagens.picture}
                    alt=""
                    layout="fill"
                    className="rounded-3xl"
                  />
                ))}
              </CarrouselLocation>
            </div>
          </div>
        </section>
      </main>
      <main id="comments" className="bg-gray-0">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-8 max-md:gap-8">
          <div className="w-full text-center">
            <h2 className="text-32 text-gray-900 font-semibold max-md:text-24 mb-6 max-md:mb-4  leading-normal ">
              O que nossos clientes dizem
            </h2>
            <cite className="text-24 text-gray-500 font-light max-md:text-20">
              “ Nossos corações se aquecem com o amor dos nossos clientes; nossa
              maior satisfação reside em transformar vidas, demonstrando que
              todos nós somos verdadeiramente maravilhosos.
            </cite>
          </div>
          <CarrouselComments>
            {dataComments.map((depoimento: CommentItem) => (
              <CardDepoimento key={depoimento.id} data={depoimento} />
            ))}
          </CarrouselComments>
        </section>
      </main>
      <main id="contact" className="bg-brand-200">
        <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col max-md:px-4 max-md:py-8 max-md:gap-4 text-center">
          <h2 className="text-32 text-gray-900 font-semibold max-md:text-24 mb-6 max-md:mb-4  leading-normal">
            Entre em contato
          </h2>
          <p className="text-16 text-gray-800 font-medium spece mb-4 max-md:text-18 max-md:mb-2 leading-normal ">
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
