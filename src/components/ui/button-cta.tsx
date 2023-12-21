import Link from "next/link";

interface ButtonCtaProps {
  data: Button;
}

export default function ButtonCta({ data }: ButtonCtaProps) {
  return (
    <Link
      className="text-14 font-medium text-gray-50 py-4 px-8 rounded-sm uppercase bg-brand-1000 "
      href={data.href}
    >
      {data.name}
    </Link>
  );
}
