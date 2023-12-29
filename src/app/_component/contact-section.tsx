import { listContacts } from "@/assets/database/contacts-data";
import { ButtonContact } from "@/components/ui/button-contact";

export default function ContactSection() {
  return (
    <main id="contact" className="bg-brand-200">
      <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col max-md:px-4 max-md:py-8 max-md:gap-4 text-center">
        <h2 className="text-32 text-gray-900 font-semibold max-md:text-24 mb-6 max-md:mb-4  leading-normal">
          Entre em contato
        </h2>
        <p className="text-16 text-gray-800 font-medium spece mb-4 max-md:text-18 max-md:mb-2 leading-normal ">
          Agende agora mesmo pelo nosso whatsapp e acesse nosso instragram para
          conhecer um pouco mais do nosso trabalho.
        </p>
        <div className="flex items-center justify-center gap-8 max-md:gap-4">
          {listContacts.map((contact) => (
            <ButtonContact key={contact.id} data={contact} />
          ))}
        </div>
      </section>
    </main>
  );
}
