import { ReactElement } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { Flex } from "@ui/Flex";
import { NavLink } from "react-router";
import { ROUTES } from "@routes/constants";
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
        <Flex
          className="footer-links"
          justifyContent="center"
          alignItems="align-center"
        >
          <AiFillInstagram size={"2.5em"} />
          <RiWhatsappFill size={"2.5em"} />
          <FaTelegram size={"2.5em"} />
        </Flex>
      </Flex>
    </footer>
  );
};
