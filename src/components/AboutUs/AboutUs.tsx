import about1 from "@assets/About/about1.png";
import about2 from "@assets/About/about2.svg";
import about3 from "@assets/About/about3.png";
import { Flex } from "@components/ui/Flex";
import { Button } from "@components/ui/Button";
import { Image } from "@mantine/core";
import { ReactElement } from "react";
import "./style.scss";

export const AboutUs = (): ReactElement => {
  return (
    <>
      <Image src={about1} alt="about1" />
      <Flex className="about" flexDirection="column">
        <h1>О компании</h1>
        <p>
          В BON&CO мы ценим доверие наших клиентов и гарантируем высокое
          качество в каждом изделии из керамогранита. В нашем ассортименте —
          дизайнерские раковины, элегантные ступени, изящные вазы, стильные
          дозаторы и роскошные столешницы.
        </p>
        <Button>ИССЛЕДОВАТЬ АССОРТИМЕНТ</Button>
      </Flex>
      <Image src={about2} alt="about2" />
      <Image src={about3} alt="about3" />
      <Flex className="why-we-are" flexDirection="column">
        <h1>Почему мы?</h1>
        <p>
          Мы ценим каждого клиента и стремимся к идеальному результату. Ваше
          удовлетворение — наша главная цель.
        </p>
        <p>Доверьтесь нам — и ваш интерьер заиграет новыми гранями.</p>
      </Flex>
    </>
  );
};
