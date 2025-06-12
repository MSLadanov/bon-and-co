import about1 from "@assets/About/about1.png";
import about2 from "@assets/About/about2.svg";
import about3 from "@assets/About/about3.png";
import about1Desktop from "@assets/About/about1-desktop.png";
import about2Desktop from "@assets/About/about2-desktop.svg";
import about3Desktop from "@assets/About/about3-desktop.png";
import { Flex } from "@components/ui/Flex";
import { Button } from "@components/ui/Button";
import { Center, Image, SimpleGrid } from "@mantine/core";
import { ReactElement } from "react";
import { PiStarFourFill } from "react-icons/pi";
import "./style.scss";

export const AboutUs = (): ReactElement => {
  return (
    <>
      <Flex className="about" flexDirection="column">
        <Image src={about1} alt="about1" />
        <Flex
          className="about__stars"
          alignItems="align-center"
          justifyContent="center"
        >
          <PiStarFourFill size="1.5em" />
          <PiStarFourFill size="1.5em" />
          <PiStarFourFill size="1.5em" />
        </Flex>
        <Flex
          className="about__text"
          flexDirection="column"
          alignItems="align-center"
        >
          <h1>О компании</h1>
          <p>
            В BON&CO мы ценим доверие наших клиентов и гарантируем высокое
            качество в каждом изделии из керамогранита. В нашем ассортименте —
            дизайнерские раковины, элегантные ступени, изящные вазы, стильные
            дозаторы и роскошные столешницы.
          </p>
          <Button>ИССЛЕДОВАТЬ АССОРТИМЕНТ</Button>
        </Flex>
        <Image src={about2} alt="about2" mt={"17%"} />
        <Image src={about3} alt="about3" />
        <Flex
          className="about__why-we-are"
          flexDirection="column"
          alignItems="align-center"
        >
          <h1>Почему мы?</h1>
          <p>
            Мы ценим каждого клиента и стремимся к идеальному результату. Ваше
            удовлетворение — наша главная цель.
          </p>
          <p>Доверьтесь нам — и ваш интерьер заиграет новыми гранями.</p>
        </Flex>
      </Flex>
      <Flex
        className="about-desktop"
        flexDirection="column"
        alignItems="align-center"
      >
        <Image src={about1Desktop} alt="about1" />
        <Flex
          className="about__stars"
          alignItems="align-center"
          justifyContent="center"
        >
          <PiStarFourFill size="1.5em" />
          <PiStarFourFill size="1.5em" />
          <PiStarFourFill size="1.5em" />
        </Flex>
        <Center>
          <h1>О компании</h1>
          <p>
            В BON&CO мы ценим доверие наших клиентов и гарантируем высокое
            качество в каждом изделии из керамогранита. В нашем ассортименте —
            дизайнерские раковины, элегантные ступени, изящные вазы, стильные
            дозаторы и роскошные столешницы.
          </p>
          <Button>ИССЛЕДОВАТЬ АССОРТИМЕНТ</Button>
        </Center>
        <Image src={about2Desktop} alt="about2" />
        <SimpleGrid cols={{ base: 2 }}>
          <Center ta={"start"}>
            <h1>Почему мы?</h1>
            <p>
              Мы ценим каждого клиента и стремимся к идеальному результату. Ваше
              удовлетворение — наша главная цель.
              <br />
              Доверьтесь нам — и ваш интерьер заиграет новыми гранями.
            </p>
          </Center>
          <Image src={about3Desktop} alt="about3" />
        </SimpleGrid>
      </Flex>
    </>
  );
};
