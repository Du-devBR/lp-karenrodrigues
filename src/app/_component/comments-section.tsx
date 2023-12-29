import CardDepoimento from "@/components/card-depoimento";
import CarrouselComments from "@/components/slides/carrousel-comment";

interface CommentsDataProps {
  data: any;
}

export default function CommentsSection({ data }: CommentsDataProps) {
  return (
    <main id="comments" className="bg-gray-0">
      <section className="max-w-screen-2xl m-auto px-16 py-24 flex flex-col gap-16 max-md:px-4 max-md:py-8 max-md:gap-8">
        <div className="w-full text-center">
          <h2 className="text-32 text-gray-900 font-semibold max-md:text-24 mb-6 max-md:mb-4  leading-normal ">
            O que nossos clientes dizem
          </h2>
          <cite className="text-24 text-gray-500 font-light max-md:text-20">
            “ Nossos corações se aquecem com o amor dos nossos clientes; nossa
            maior satisfação reside em transformar vidas, demonstrando que todos
            nós somos verdadeiramente maravilhosos.
          </cite>
        </div>
        <CarrouselComments>
          {data.map((depoimento: CommentItem) => (
            <CardDepoimento key={depoimento.id} data={depoimento} />
          ))}
        </CarrouselComments>
      </section>
    </main>
  );
}
