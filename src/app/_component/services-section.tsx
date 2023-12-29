import CardService from "@/components/card-service";
import CardSlideService from "@/components/card-slide-services";
import CarrouselServices from "@/components/slides/carrousel-service";

interface ServiceDataProps {
  data: ServiceData;
}

export default function ServiceSection({ data }: ServiceDataProps) {
  const servicesSection: ServiceItem[] = data.services;
  return (
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
  );
}
