import { listButtonCta } from "@/assets/database/button-cta-data";
import { listImagensLocation } from "@/assets/database/location-data";
import CarrouselLocation from "@/components/slides/carrousel-location";
import ButtonCta from "@/components/ui/button-cta";
import Image from "next/legacy/image";

export default function LocationSection() {
  return (
    <main id="location" className="bg-gray-0">
      <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col justify-between gap-16 max-md:px-4 max-md:py-8 max-md:gap-4">
        <div className="flex w-full justify-between gap-16  max-md:flex-col ">
          <div className="flex w-full flex-col items-start max-md:items-center max-md:text-center  ">
            <h2 className="text-32 text-gray-900 font-semibold max-md:text-24 mb-6 max-md:mb-4  leading-normal ">
              Somos um espaço bem localizado, receptivo e atraente.
            </h2>
            <p className="text-16 text-gray-800 font-medium spece mb-4 max-md:text-18 max-md:mb-2 leading-normal">
              Nosso espaço é todo equipado para trazer o maximo de conforto a
              nossos clientes, fzendo com que se sinta em casa, todo o ambiente
              foi pensado em nossos cliente. Venha nos conhecer, estamos no
              coração de Brás Cubas em Mogi das Cruzes.
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
  );
}
