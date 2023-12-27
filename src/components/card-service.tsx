interface CardServiceProps {
  data: ServiceItem;
}

export default function CardService({ data }: CardServiceProps) {
  return (
    <div className="flex flex-col w-full self-end max-lg:self-start gap-6 max-w-[571px] border-r-4 border-brand-1000 border-opacity-20 hover:border-r-4 hover:border-opacity-100 duration-500 pr-8 cursor-grab max-lg:pl-8 max-lg:pr-0 max-lg:border-l-4 max-lg:hover:border-l-4 max-lg:border-r-0 max-lg:hover:border-r-0">
      <h2 className="text-32 text-gray-900 font-semibold capitalize max-md:text-24">
        {data.name}
      </h2>
      <p className="text-16 text-gray-800 font-light">{data.description}</p>
    </div>
  );
}
