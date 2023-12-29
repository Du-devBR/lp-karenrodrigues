import { getDataServices } from "./util/getDataservicesApi";
import { getDataComments } from "./util/getDataCommentsApi";
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
