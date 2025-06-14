import { ReactElement } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { Flex } from "@ui/Flex";
import { NavLink } from "react-router";
import { ROUTES } from "@routes/constants";
import getAmo from "@assets/supporters/getamo.png";
import myBusiness from "@assets/supporters/my-business.png";
import { Center, Image } from "@mantine/core";
import footerLogo from "@assets/logo/footer-logo.png";
import "./style.scss";

export const Footer = (): ReactElement => {
  return (
    <footer>
      <Flex
        className="footer-nav"
        justifyContent="center"
        flexDirection="column"
        alignItems="align-center"
      >
        <nav>
          <ul>
            <li>
              <NavLink to={ROUTES.ABOUT}>О компании</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.GALLERY}>Галерея товаров</NavLink>
            </li>
            <li>
              <NavLink to={ROUTES.MAIN}>Мастер класс</NavLink>
            </li>
          </ul>
        </nav>
        <Image src={footerLogo} alt="footer-logo" w={"48px"} h={"80px"} />
        <Flex
          className="footer-links"
          justifyContent="space-between"
          alignItems="align-center"
        >
          <AiFillInstagram size={"2em"} />
          <RiWhatsappFill size={"2em"} />
          <FaTelegram size={"2em"} />
        </Flex>
      </Flex>
      <Flex className="footer-bottom" flexDirection="column">
        <Image src={getAmo} alt="get-amo" />
        <Image src={myBusiness} alt="my-business" />
        <p>2024 © Бондарев Евгений Владимирович Все права защищены.</p>
        <p>Политика конфиденциальности</p>
      </Flex>
      <Flex className="footer-bottom-mobile" flexDirection="column">
        <Center>
          <p>2024 © Бондарев Евгений Владимирович Все права защищены.</p>{" "}
          <p>Политика конфиденциальности</p>
        </Center>
        <Center mb={"2%"}>
          <Image src={getAmo} alt="get-amo" />
          <Image src={myBusiness} alt="my-business" />
        </Center>
      </Flex>
    </footer>
  );
};
