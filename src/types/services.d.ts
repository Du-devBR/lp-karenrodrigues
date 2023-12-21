 interface ServiceItem {
  id: string;
  image: StaticImageData;
  name: string;
  description: string;
}

 interface ServiceSection {
  id: string;
  title: string;
  card: ServiceItem[];
}

 interface ServiceData {
  services: [];
}
