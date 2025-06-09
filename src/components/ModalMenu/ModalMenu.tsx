import { ReactElement } from "react";
import { NavLink } from "react-router";
import { ROUTES } from "@routes/constants";
import "./style.scss";

export const ModalMenu = (): ReactElement => {
  return (
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
        <li>
          <NavLink to={ROUTES.CONTACTS}>Контакты</NavLink>
        </li>
      </ul>
    </nav>
  );
};
