import { Flex } from "@ui/Flex";
import { Carousel } from "@mantine/carousel";
import slide1 from "@assets/OurServices/Slide1.png";
import slide2 from "@assets/OurServices/Slide2.png";
import slide3 from "@assets/OurServices/Slide3.png";
import slide4 from "@assets/OurServices/Slide4.png";
import slide5 from "@assets/OurServices/Slide5.png";
import { Slide } from "@ui/Slide";
import "./style.scss";

export const OurServices = () => {
  const images = [
    {
      id: 1,
      image: slide1,
      alt: "sink",
      category: "Раковины",
      description: "Долговечные, устойчивые к царапинам и загрязнениям",
    },
    {
      id: 2,
      image: slide2,
      alt: "stairs",
      category: "Ступени",
      description: "Элегантные, добавляющие изысканность",
    },
    {
      id: 3,
      image: slide3,
      alt: "vase",
      category: "Вазы",
      description: "Эксклюзивные, подчеркивающие ваш вкус",
    },
    {
      id: 4,
      image: slide4,
      alt: "dispenser",
      category: "Дозаторы",
      description: "Красивые и функциональные",
    },
    {
      id: 5,
      image: slide5,
      alt: "tabletop",
      category: "Столешницы",
      description: "Прочные, с уникальным дизайном",
    },
  ];
  const slides = images.map((image) => (
    <Slide
      key={image.id}
      id={image.id}
      image={image.image}
      alt={image.alt}
      category={image.category}
      description={image.description}
    />
  ));
  return (
    <>
      <Flex className="our-services" flexDirection="column">
        <h2>Наши услуги:</h2>
        <Carousel
          withIndicators
          withControls={false}
          styles={{
            container: {
              position: "relative",
            },
            indicators: {
              position: "absolute",
              bottom: "-40px",
            },
            indicator: {
              backgroundColor: "black",
            },
          }}
        >
          {slides}
        </Carousel>
      </Flex>
      <Flex className="our-services-desktop" flexDirection="column">
        <h2>Наши услуги:</h2>
        <Carousel
          withIndicators
          withControls={false}
          slideSize="25%"
          slideGap={'xs'}
          styles={{
            container: {
              position: "relative",
            },
            indicators: {
              position: "absolute",
              bottom: "-40px",
            },
            indicator: {
              backgroundColor: "black",
            },
          }}
        >
          {slides}
        </Carousel>
      </Flex>
    </>
  );
};
