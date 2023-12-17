"use client";

import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  title: string;
  href: string;
}

interface Props {
  onHamburguer?: boolean;
  onClosedHamburguer?: () => void;
}

const arrayMenu: MenuItem[] = [
  {
    title: "inicio",
    href: "/",
  },
  {
    title: "sobre",
    href: "/#sobre",
  },
  {
    title: "galeria",
    href: "/galeria",
  },
  {
    title: "sobrancelhas",
    href: "/#servicos",
  },
  {
    title: "espaço",
    href: "/#espaco",
  },
  {
    title: "depoimentos",
    href: "/#depoimentos",
  },
];

export default function MenuNav({ onHamburguer, onClosedHamburguer }: Props) {
  const [active, setActive] = useState("");
  return (
    <nav
      className={`flex max-md:flex-col gap-4 max-md:px-4  ${
        onHamburguer ? "visible max-md:mt-24" : ""
      }`}
    >
      {arrayMenu.map((item: MenuItem, index) => (
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
    </nav>
  );
}
