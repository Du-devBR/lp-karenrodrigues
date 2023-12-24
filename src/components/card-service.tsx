interface CardServiceProps {
  data: ServiceItem;
}

export default function CardService({ data }: CardServiceProps) {
  return (
    <div className="flex flex-col gap-6 max-w-[571px]">
      <h2 className="text-32 text-gray-900 font-semibold">{data.name}</h2>
      <p className="text-16 text-gray-800 font-light">{data.description}</p>
    </div>
  );
}
