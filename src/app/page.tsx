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
import ServiceSection from "./_component/services-section";
import LocationSection from "./_component/location-section";
import CommentsSection from "./_component/comments-section";
import ContactSection from "./_component/contact-section";

export default async function Home() {
  const dataServices: ServiceData = await getDataServices();
  const dataComments = await getDataComments();

  return (
    <>
      <AboutSection />
      <ServiceSection data={dataServices} />
      <LocationSection />
      <CommentsSection data={dataComments} />
      <ContactSection />
    </>
  );
}
