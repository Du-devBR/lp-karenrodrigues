import Image from "next/legacy/image";

interface CardServiceProps {
  data: ServiceItem;
}

export default function CardSlideService({ data }: CardServiceProps) {
  return (
    <div className=" w-auto h-[500px] rounded-lg shadow-gray-800 shadow-inner  relative overflow-hidden  max-md:h-[305px] ">
      <Image src={data.image} alt="" objectFit="cover" layout="fill" />
    </div>
  );
}
