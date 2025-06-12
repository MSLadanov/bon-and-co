import { Flex } from "@ui/Flex";
import { ReactElement } from "react";
import { Center, Container, Image, SimpleGrid } from "@mantine/core";
import advantages1 from "@assets/Advantages/advantages1.png";
import advantages2 from "@assets/Advantages/advantages2.png";
import advantages3 from "@assets/Advantages/advantages3.png";
import advantages3Desktop from "@assets/Advantages/advantages3-desktop.png";
import { CollapseBox } from "@ui/CollapseBox";
import { Button } from "@ui/Button";
import Marquee from "react-fast-marquee";
import { Blockquote } from "../Blockquote/Blockquote";
import "./style.scss";

export const Advantages = (): ReactElement => {
  const advantages = [
    {
      id: 1,
      title: "Авторские решения",
      description:
        "Мы создаем уникальные изделия, воплощая в жизнь ваши самые смелые идеи и проекты.",
    },
    {
      id: 2,
      title: "Высокое качество",
      description:
        "Используем только лучшие материалы и передовые технологии, чтобы обеспечить долговечность и изящество каждого изделия.",
    },
    {
      id: 3,
      title: "Индивидуальный подход",
      description:
        "Мы внимательно учитываем ваши пожелания и требования, чтобы создать продукт, полностью соответствующий вашим ожиданиям.",
    },
    {
      id: 4,
      title: "Доставка и монтаж",
      description:
        "Оперативная доставка и профессиональный монтаж обеспечивают безупречный результат в указанные сроки.",
    },
  ];
  return (
    <>
      <Flex
        className="advantages"
        flexDirection="column"
        alignItems="align-center"
      >
        <h2>Преимущества</h2>
        <p>
          В каждом проекте мы стремимся превзойти ожидания, предлагая не просто
          продукт, а творческое решение, созданное с душой и вниманием к
          деталям.
        </p>
        <Image src={advantages1} alt="advantages" />
        {advantages.map((adv) => (
          <CollapseBox
            key={adv.id}
            title={adv.title}
            description={adv.description}
          />
        ))}
        <Image src={advantages2} alt="advantages" mt={"5%"} />
        <Button>Перейти в галерею</Button>
        <Image src={advantages3} alt="advantages" w={"100vw"} mb={"15%"} />
        <h2>Преимущества</h2>
        <p>
          Приглашаем на мастер-класс по созданию раковин из керамогранита в
          Краснодаре. Раковины из керамогранита становятся всё более
          популярными, и вы можете стать одним из первых специалистов в этой
          трендовой технологии.
        </p>
        <h3>Что включено в мастер-класс?</h3>
        <ul>
          <li>2 дня обучения от опытных мастеров</li>
          <li>Материалы и инструменты предоставляются</li>
          <li>Сертификат об окончании курса</li>
          <li>Возможность трудоустройства в нашу компанию</li>
        </ul>
        <Button>Записаться на мастер-класс</Button>
        <Marquee>
          ✦ 15 000 рублей вместо 25 000 рублей ✦ Цена действует при записи в
          течение 2 дней с момента получения письма.
        </Marquee>
        <Blockquote>
          Не упустите возможность стать экспертом и увеличить свой доход! Мы
          всегда рады ответить на ваши вопросы и с нетерпением ждем вашего
          отклика.
        </Blockquote>
      </Flex>
      <Flex
        className="advantages-desktop"
        flexDirection="column"
        alignItems="align-center"
      >
        <SimpleGrid w={"80%"} cols={{ base: 2 }}>
          <div>
            <h2>Преимущества</h2>
            <p>
              Приглашаем на мастер-класс по созданию раковин из керамогранита в
              Краснодаре. Раковины из керамогранита становятся всё более
              популярными, и вы можете стать одним из первых специалистов в этой
              трендовой технологии.
            </p>
          </div>
          <div>
            <Image src={advantages1} alt="advantages" w={"500px"} h={"336px"} />
          </div>
          <Center>
            <Image
              src={advantages2}
              alt="advantages"
              w={"350px"}
              h={"248px"}
              mt={"5%"}
            />
            <Button>ПЕРЕЙТИ В ГАЛЕРЕЮ</Button>
          </Center>
          <div>
            {advantages.map((adv) => (
              <CollapseBox
                key={adv.id}
                title={adv.title}
                description={adv.description}
              />
            ))}
          </div>
        </SimpleGrid>
        <SimpleGrid w={"100%"} cols={{ base: 2 }} mt={'10%'}>
          <Container pl={'20%'} flex={''}>
            <h2>Искусство в деталях: Мастер-класс</h2>
            <p>
              Приглашаем на мастер-класс по созданию раковин из керамогранита в
              Краснодаре. Раковины из керамогранита становятся всё более
              популярными, и вы можете стать одним из первых специалистов в этой
              трендовой технологии.
            </p>
            <h3>Что включено в мастер-класс?</h3>
            <ul>
              <li>2 дня обучения от опытных мастеров</li>
              <li>Материалы и инструменты предоставляются</li>
              <li>Сертификат об окончании курса</li>
              <li>Возможность трудоустройства в нашу компанию</li>
            </ul>
            <Button>ЗАПИСАТЬСЯ НА МАСТЕР-КЛАСС</Button>
          </Container>
          <Center>
            <Image src={advantages3Desktop} alt="advantages" />
          </Center>
        </SimpleGrid>
         <Marquee>
          ✦ 15 000 рублей вместо 25 000 рублей ✦ Цена действует при записи в
          течение 2 дней с момента получения письма.
        </Marquee>
        <Blockquote>
          Не упустите возможность стать экспертом и увеличить свой доход! Мы
          всегда рады ответить на ваши вопросы и с нетерпением ждем вашего
          отклика.
        </Blockquote>
      </Flex>
    </>
  );
};
