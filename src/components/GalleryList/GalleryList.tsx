import { ReactElement } from "react";
import { Flex } from "@mantine/core";
import { Image, SimpleGrid } from "@mantine/core";
import gallery1 from "@assets/Gallery/gallery1.png";
import gallery2 from "@assets/Gallery/gallery2.png";
import gallery3 from "@assets/Gallery/gallery3.png";
import gallery4 from "@assets/Gallery/gallery4.png";
import gallery5 from "@assets/Gallery/gallery5.png";
import gallery6 from "@assets/Gallery/gallery6.png";
import gallery7 from "@assets/Gallery/gallery7.png";
import gallery8 from "@assets/Gallery/gallery8.png";
import gallery9 from "@assets/Gallery/gallery9.png";
import gallery10 from "@assets/Gallery/gallery10.png";

const galleryImages = [
  { src: gallery1, alt: "Пример работы 1" },
  { src: gallery2, alt: "Пример работы 2" },
  { src: gallery3, alt: "Пример работы 3" },
  { src: gallery4, alt: "Пример работы 4" },
  { src: gallery5, alt: "Пример работы 5" },
  { src: gallery6, alt: "Пример работы 6" },
  { src: gallery7, alt: "Пример работы 7" },
  { src: gallery8, alt: "Пример работы 8" },
  { src: gallery9, alt: "Пример работы 9" },
  { src: gallery10, alt: "Пример работы 10" },
];

export const GalleryList = (): ReactElement => {
  return (
    <Flex direction="column" gap="md">
      <Flex direction="column" mb="xl">
        <h1>Фотогалерея</h1>
        <p>
          Оцените наше мастерство в разделе галереи. Здесь представлены примеры
          наших работ. Каждое фото — это подтверждение нашего высокого качества
          и индивидуального подхода к каждому проекту.
        </p>
      </Flex>

      <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }}>
        {galleryImages.map((image, index) => (
          <Image
            key={index}
            src={image.src}
            alt={image.alt}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </SimpleGrid>
    </Flex>
  );
};
