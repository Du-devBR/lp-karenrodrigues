"use client";

import { MenuItem, menuNavList } from "@/assets/database/menu-data";
import Link from "next/link";
import { useState } from "react";
import ButtonCta from "./ui/button-cta";
import { listButtonCta } from "@/assets/database/button-cta-data";

interface Props {
  onHamburguer?: boolean;
  onClosedHamburguer?: () => void;
}

export default function MenuNav({ onHamburguer, onClosedHamburguer }: Props) {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`flex max-md:flex-col gap-4 max-md:px-4 items-center ${
        onHamburguer ? "visible max-md:mt-24 " : ""
      }`}
    >
      {menuNavList.map((item: MenuItem, index) => (
        <Link
          key={index}
          href={item.href}
          className={`text-16 font-medium capitalize hover:text-brand-1000 duration-500  ${
            active === item.title ? "text-brand-1000" : "text-gray-100"
          }`}
          onClick={() => {
            setActive(item.title);
            if (onClosedHamburguer) {
              onClosedHamburguer();
            }
          }}
        >
          {item.title}
        </Link>
      ))}
      <ButtonCta data={listButtonCta.contact} />
    </nav>
  );
}
