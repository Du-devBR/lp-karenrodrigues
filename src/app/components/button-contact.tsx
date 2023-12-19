import { ButtonContactInterface } from "../page";

interface ButtonProps {
  data: ButtonContactInterface;
}

export function ButtonContact({ data }: ButtonProps) {
  return (
    <a
      href={data.href}
      target="_blank"
      className={`text-BUTTON-C0NTACT uppercase py-8 bg-${data.color} w-[227px] text-center rounded-2xl text-gray-100 max-md:py-5`}
    >
      {data.text}
    </a>
  );
}
