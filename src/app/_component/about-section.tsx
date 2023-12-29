import Image from "next/legacy/image";
import imgSobre from "@/../public/bg-karen.png";

export default function AboutSection() {
  return (
    <main id="about" className="bg-gray-0">
      <section className=" max-w-screen-2xl m-auto px-16 py-24 flex items-center gap-16 max-lg:flex-col max-md:px-4 max-md:pt-16 pb-8 max-md:mb-0 relative">
        {/* <svg
        viewBox="0 0 1024 1024"
        className="  absolute h-[45rem] w-[45rem] max-lg:h-[25rem] max-lg:w-[25rem] max-lg:top-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
        aria-hidden="true"
      >
        <circle
          cx="512"
          cy="512"
          r="512"
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
            <stop stopColor="#EB9D89" />
            <stop offset="10" stopColor="#FFCABD" />
          </radialGradient>
        </defs>
      </svg> */}
        <div className="flex flex-col w-full gap-16 max-md:gap-6 ">
          <div className="flex flex-col gap-6 max-w-[571px] max-md:text-center ">
            <h1 className=" text-40 text-gray-900 font-bold max-md:text-32">
              Karen Rodrigues especialista em Sobrancelhas
            </h1>
            <cite className="text-24 text-gray-500 font-light max-md:text-20">
              “ Amo testemunhar o sorriso iluminar o rosto das pessoas depois
              que concluo o design de sobrancelhas, sabendo que pude realçar sua
              beleza e confiança. ”
            </cite>
            <p className=" text-16 font-light text-gray-800 ">
              Com anos de experiência e paixão por realçar a beleza natural, eu,
              como designer de sobrancelhas, adoto uma abordagem personalizada
              para criar sobrancelhas deslumbrantes que complementam
              perfeitamente suas características únicas.
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center w-full  max-h-[834px] bg-brand-800 rounded-[32px] pl-16 pr-4 pb-4 pt-4  ">
          <Image src={imgSobre} alt="Karen Rodrigues" />
        </div>
      </section>
    </main>
  );
}
