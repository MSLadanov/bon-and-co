import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";
import { ReactElement } from "react";
import { Flex } from "@ui/Flex";
import { useHover } from "@mantine/hooks";
import "./style.scss";

interface ISlideProps {
  id: number;
  image: string;
  alt: string;
  category: string;
  description: string;
}

export const Slide: React.FC<ISlideProps> = ({
  id,
  image,
  alt,
  category,
  description,
}): ReactElement => {
  const { hovered, ref } = useHover();
  return (
    <Carousel.Slide key={id} styles={{ slide: { position: "relative" } }}>
      <Image src={image} alt={alt} height={517} ref={ref} />
      {
        <p className={"slide-description" + (hovered ? " hovered" : "")}>
          {description}
        </p>
      }
      <Flex
        className="slide-category"
        justifyContent="center"
        alignItems="align-center"
      >
        <p>{category}</p>
      </Flex>
    </Carousel.Slide>
  );
};
