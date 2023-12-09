import Image from "next/legacy/image";
import { ServicosItem } from "../page";

interface CardProps {
  data: ServicosItem;
}

export default function Card({ data }: CardProps) {
  return (
    <div>
      <Image src={data.image} alt="" />
      <div>
        <h3>{data.name}</h3>
        <p>{data.description}</p>
      </div>
    </div>
  );
}
