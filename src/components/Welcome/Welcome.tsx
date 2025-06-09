import { ReactElement } from "react";
import { Flex } from "@ui/Flex";
import asset from "@assets/Welcome/asset.png";
import { Button } from "@ui/Button";
import "./style.scss";

export const Welcome = (): ReactElement => {
  return (
    <Flex className="welcome" flexDirection="column">
      <h1>Добро пожаловать в BON&CO!</h1>
      <p>
        Мы — мастерская по обработке керамогранита, создающая уникальные изделия
        для вашего интерьера.
      </p>
      <Button>Исследовать ассортимент</Button>
      <img src={asset} alt="welcome-asset" />
    </Flex>
  );
};
