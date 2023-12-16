import Image from "next/legacy/image";
import { ServicosItem } from "../page";

interface CardProps {
  data: ServicosItem;
}

export default function Card({ data }: CardProps) {
  return (
    <div className=" w-full h-[505px] rounded-lg shadow-gray-800 shadow-inner  relative overflow-hidden transform hover:scale-105 duration-500 max-md:h-[405px] ">
      <Image src={data.image} alt="" objectFit="cover" layout="fill" />
      <div className="absolute w-full p-4 bottom-0 ">
        <div className="flex flex-col gap-3 p-4 bg-gray-200 rounded-lg bg-opacity-25 transition-all hover:bg-opacity-50">
          <h3 className="text-20 text-gray-0 font-bold max-md:text-16 first-letter:uppercase text-inherit">
            {data.name}
          </h3>
          <p className="text-14 text-gray-100 text-inherit font-light">
            {data.description}
          </p>
        </div>
      </div>
    </div>
  );
}
