import Image from "next/legacy/image";
import { ServicosItem } from "../page";

interface CardProps {
  data: ServicosItem;
}

export default function Card({ data }: CardProps) {
  console.log(data);
  return (
    <div className="max-w-[276px] bg-brand-200 rounded-sm">
      <Image src={data.image} alt="" />
      <div className="py-6 px-4 flex flex-col gap-3">
        <h3 className="text-20 text-gray-900 font-bold max-md:text-16">
          {data.name}
        </h3>
        <p className="text-14 text-gray-600 font-light">{data.description}</p>
      </div>
    </div>
  );
}
