interface CardServiceProps {
  data: ServiceItem;
}

export default function CardService({ data }: CardServiceProps) {
  return (
    <div className="flex flex-col gap-6 max-w-[571px] first:border-l-4 first:border-brand-1000 pl-8">
      <h2 className="text-32 text-gray-900 font-semibold capitalize max-md:text-24">
        {data.name}
      </h2>
      <p className="text-16 text-gray-800 font-light">{data.description}</p>
    </div>
  );
}
