interface ImagemLocation {
  id: string;
  picture: StaticImageData;
}

interface LocationSection {
  id: string;
  nome: string;
  imagens: ImagemLocation[];
}
