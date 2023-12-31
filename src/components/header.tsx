"use client";
import Image from "next/image";
import logo from "@/../public/logotipo.png";
import { useState } from "react";
import MenuNav from "./menu-nav";

export default function Header() {
  const [hambuguer, setHamburguer] = useState(false);

  return (
    <>
      <header className="h-24 max-w-screen-2xl m-auto relative flex flex-wrap justify-between items-center z-20 md:px-16 max-md:px-4">
        <Image src={logo} alt={"Letra K e R em formato de laço na cor rosa."} />
        <div className=" flex items-center justify-end gap-4 max-md:hidden">
          <MenuNav />
        </div>
        <div
          className=" md:hidden cursor-pointer relative"
          onClick={() => setHamburguer(!hambuguer)}
        >
          <div
            className={` bg-brand-1000 h-1 w-6 mb-1 duration-700 ${
              hambuguer ? " rotate-45" : ""
            }`}
          ></div>
          <div
            className={` bg-brand-1000 h-1 w-6 mb-1 duration-700 ${
              hambuguer ? " -rotate-45 top-0 absolute" : ""
            }`}
          ></div>
          <div
            className={` bg-brand-1000 h-1 w-6 duration-700 ${
              hambuguer ? "hidden" : ""
            }`}
          ></div>
        </div>
      </header>
      <div
        className={`${
          hambuguer
            ? " absolute w-full min-h-screen top-0 bg-gray-800 duration-700 visible z-10 "
            : " w-0 h-0 opacity-0 duration-500 "
        }`}
      >
        <MenuNav
          onHamburguer={hambuguer}
          onClosedHamburguer={() => setHamburguer(false)}
        />
      </div>
    </>
  );
}
