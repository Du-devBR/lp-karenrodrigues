import Link from "next/link";

interface ButtonCtaProps {
  data: Button;
}

export default function ButtonCta({ data }: ButtonCtaProps) {
  return (
    <Link
      target={data.target}
      className="text-14 font-medium text-gray-0 py-2 px-8 rounded-sm uppercase bg-brand-1000 duration-500 hover:bg-brand-800  max-md:text-10 max-md:py-3"
      href={data.href}
    >
      {data.name}
    </Link>
  );
}
