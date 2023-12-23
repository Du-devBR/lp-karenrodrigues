import Link from "next/link";

interface ButtonCtaProps {
  data: Button;
  styleColor?: string;
}

export default function ButtonCta({ data, styleColor }: ButtonCtaProps) {
  return (
    <Link
      target={data.target}
      role="link"
      aria-label={data.name}
      className={`text-14 font-bold  py-3 px-8 rounded-sm uppercase ${
        styleColor === "secundary"
          ? "bg-white text-gray-1000 hover:bg-gray-100 hover:scale-105 hover:font-bold hover:shadow-2xl hover:shadow-gray-600 "
          : "bg-brand-1000 text-gray-1000 hover:bg-brand-800 hover:scale-105 hover:font-bold hover:shadow-2xl hover:shadow-gray-600"
      }  duration-500   max-md:text-12 `}
      href={data.href}
    >
      {data.name}
    </Link>
  );
}
