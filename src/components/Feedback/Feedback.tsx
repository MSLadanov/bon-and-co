import { ReactElement } from "react";
import { Flex } from "@ui/Flex";
import { Blockquote } from "../Blockquote/Blockquote";
import { Carousel } from "@mantine/carousel";
import { Image, SimpleGrid } from "@mantine/core";
import feedback1 from "@assets/Feedback/feedback1.png";
import feedback1Desktop from "@assets/Feedback/feedback1Desktop.png";
import { Input } from "@ui/Input/Input";
import { TextArea } from "@ui/TextArea/TextArea";
import { Button } from "@ui/Button";
import "./style.scss";

export const Feedback = (): ReactElement => {
  const reviews = [
    {
      id: 1,
      user: "Владимир М.",
      text: '" Посетил мастер-класс по работе с керамогранитом и был приятно удивлён уровнем организации. Инструкторы не только подробно объясняли процесс, но и поддерживали на каждом этапе. Спасибо команде BON&CO за этот шанс! "',
    },
    {
      id: 2,
      user: "Анна С.",
      text: '" Заказывали у BON&CO керамогранитные столешницы для кухни — это было лучшее решение для нашего интерьера! Изделие получилось идеально в цвете и текстуре, а обслуживание было на высшем уровне. Рекомендую всем! "',
    },
    {
      id: 3,
      user: "София Р.",
      text: '" Заказывала раковину для ванной в BON&CO, и результат превзошёл все ожидания! Изделие получилось не только стильным, но и невероятно качественным. Каждая деталь продумана до мелочей, а текстура выглядит просто великолепно. "',
    },
  ];
  const reviewSlides = reviews.map((review) => (
    <Carousel.Slide key={review.id}>
      <h3>{review.user}</h3>
      <p>{review.text}</p>
    </Carousel.Slide>
  ));
  return (
    <>
      <Flex className="feedback" flexDirection="column">
        <Flex
          className="feedback__text"
          flexDirection="column"
          alignItems="align-center"
        >
          <h1>Отзывы</h1>
          <p>
            Мы гордимся тем, что наши клиенты остаются довольны нашей работой.
            Читайте отзывы тех, кто уже выбрал BON&CO для своего интерьера.
          </p>
        </Flex>
        <Blockquote withBorders>
          <Carousel>{reviewSlides}</Carousel>
        </Blockquote>
        <Image src={feedback1} alt="feedback1" />
        <Flex
          className="feedback__field"
          flexDirection="column"
          alignItems="align-center"
        >
          <h1>Написать отзыв</h1>
          <p>
            Ваша обратная связь поможет нам стать лучше и предложить еще более
            качественные услуги.
          </p>
          <Input placeholder="Имя" />
          <TextArea placeholder="Комментарий" />
          <Button className="black">ОТПРАВИТЬ</Button>
        </Flex>
      </Flex>
      <Flex className="feedback-desktop" flexDirection="column">
        <Flex
          className="feedback__text"
          flexDirection="column"
          alignItems="align-center"
        >
          <h1>Отзывы</h1>
          <p>
            Мы гордимся тем, что наши клиенты остаются довольны нашей работой.
            Читайте отзывы тех, кто уже выбрал BON&CO для своего интерьера.
          </p>
        </Flex>
        <Blockquote withBorders>
          <Carousel>{reviewSlides}</Carousel>
        </Blockquote>
        <SimpleGrid cols={{base: 2}}>
          <Flex
          className="feedback__field"
          flexDirection="column"
          alignItems="align-center"
        >
          <h1>Написать отзыв</h1>
          <p>
            Ваша обратная связь поможет нам стать лучше и предложить еще более
            качественные услуги.
          </p>
          <Input placeholder="Имя" />
          <TextArea placeholder="Комментарий" />
          <Button className="black">ОТПРАВИТЬ</Button>
        </Flex>
          <Image src={feedback1Desktop} alt="feedback1" />
        </SimpleGrid>
      </Flex>
    </>
  );
};
