
export const listButtonCta = {
  contact: {
    name: "contato",
    href: "/#contact"
  },
  schedule: {
    name: "agendar",
    href: `https://wa.me/${process.env.PHONE_NUMBER || ""}`,
  },
  services: {
    name: "conheça mais",
    href: "/#services"
  },
  location: {
    name: "ver no mapa",
    href: "https://www.google.com/maps?q=-23.54728186418212,-46.21310875734265",
    target: "_blank"
  },

}
