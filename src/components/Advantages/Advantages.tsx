import { Flex } from "@ui/Flex";
import { ReactElement } from "react";
import { Image } from "@mantine/core";
import advantages1 from '@assets/Advantages/advantages1.png'
import "./style.scss";

export const Advantages = (): ReactElement => {
  return (
    <Flex className="advantages" flexDirection="column">
      <h2>Преимущества</h2>
      <p>
        В каждом проекте мы стремимся превзойти ожидания, предлагая не просто
        продукт, а творческое решение, созданное с душой и вниманием к деталям.
      </p>
      <Image src={advantages1} alt="advantages"/>
    </Flex>
  );
};
