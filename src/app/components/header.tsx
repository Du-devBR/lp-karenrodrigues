"use client";
import Image from "next/image";

import logo from "@/../public/logotipo.png";
import Link from "next/link";
import { useState } from "react";

interface MenuItem {
  title: string;
  href: string;
}

const arrayMenu: MenuItem[] = [
  {
    title: "inicio",
    href: "/",
  },
  {
    title: "sobre",
    href: "",
  },
  {
    title: "galeria",
    href: "/galeria",
  },
  {
    title: "sobrancelhas",
    href: "",
  },
  {
    title: "hydra-gloss",
    href: "",
  },
  {
    title: "nosso espaço",
    href: "",
  },
];

export default function Header() {
  const [active, setActive] = useState("");

  return (
    <header className=" container h-24 absolute flex flex-wrap justify-between items-center">
      <Image src={logo} alt={"Letra K e R em formato de laço na cor rosa."} />
      <div className=" flex items-center justify-end gap-4 max-md:hidden">
        <nav className="flex gap-4">
          {arrayMenu.map((item: MenuItem, index) => (
            <Link
              key={index}
              href={item.href}
              className={`text-16 font-medium capitalize hover:text-brand-1000 duration-500 ${
                active === item.title ? "text-brand-1000" : "text-gray-100"
              }`}
              onClick={() => setActive(item.title)}
            >
              {item.title}
            </Link>
          ))}
        </nav>
        <div className=" w-20 h-6 bg-blue-400"></div>
      </div>
      <div className=" md:hidden">☰</div>
    </header>
  );
}
