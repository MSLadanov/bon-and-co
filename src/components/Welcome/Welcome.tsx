import { ReactElement } from "react";
import { Flex } from "@ui/Flex";
import asset from "@assets/Welcome/asset.png";
import { Button } from "@ui/Button";
import { Blockquote } from "@components/Blockquote/Blockquote";
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
      <Blockquote withQuotes={true} withBorders={true}>
        Наши дизайнерские решения включают стильные раковины, элегантные
        ступени, эксклюзивные вазы, функциональные дозаторы и прочные
        столешницы. Мы гордимся качеством и индивидуальным подходом к каждому
        проекту.
      </Blockquote>
    </Flex>
  );
};
