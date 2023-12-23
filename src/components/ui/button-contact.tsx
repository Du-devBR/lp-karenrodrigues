interface ButtonProps {
  data: ButtonContact;
}

export function ButtonContact({ data }: ButtonProps) {
  const colorMap: Record<string, string> = {
    whatsapp: "bg-whatsapp",
    instagram: "bg-instagram",
  };

  const colorClass = colorMap[data.color] || "bg-red-300";
  return (
    <a
      href={data.href}
      target="_blank"
      className={`text-BUTTON-C0NTACT uppercase py-8 ${colorClass} w-[227px] text-center rounded-2xl text-gray-100 max-md:py-5`}
    >
      {data.text}
    </a>
  );
}
