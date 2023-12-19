import { DepoimentoItem } from "../page";

interface CardDepoimentoProps {
  data: DepoimentoItem;
}

export default function CardDepoimento({ data }: CardDepoimentoProps) {
  return (
    <div className="rounded-lg min-h-[505px] bg-brand-400 p-6 flex flex-col items-center max-md:min-h-[405px] ">
      <div className="w-[90px] h-[90px] rounded-full bg-white flex items-center justify-center p-4 border-solid border-brand-800 border-4 mb-6 max-md:w-[60px] max-md:h-[60px]">
        <span className="text-6xl text-brand-800 font-bold uppercase max-md:text-3xl">
          {data.image}
        </span>
      </div>
      <p className="text-center text-16 font-light text-gray-800 max-md:text-14">
        {data.descricao}
      </p>

      <strong className="text-20 text-brand-1000 font-medium mt-auto max-md:text-16">
        {data.nome}
      </strong>
    </div>
  );
}
