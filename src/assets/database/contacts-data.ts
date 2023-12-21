import { randomUUID } from "node:crypto";

export const listContacts: ButtonContact[] = [
  {
    id: randomUUID(),
    text: "whatsapp",
    color: "whatsapp",
    href: `https://wa.me/${process.env.PHONE_NUMBER || ""}`,
  },
  {
    id: randomUUID(),
    text: "instagram",
    color: "instagram",
    href: `https://www.instagram.com/${process.env.INSTAGRAM_PROFILE || ""}`,
  },
];
