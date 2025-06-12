import { ReactElement } from "react";
import { Flex } from "@ui/Flex";
import logoVertical from "@assets/logo/logo-vertical.png";
import logoHorizontal from "@assets/logo/logo-horizontal.png";
import { Burger, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModalMenu } from "@components/ModalMenu";
import "./style.scss";
import { NavLink } from "react-router";
import { ROUTES } from "@routes/constants";

export const Header = (): ReactElement => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <>
      <header className="mobile-header">
        <Modal
          opened={opened}
          onClose={close}
          closeOnClickOutside={true}
          withCloseButton={false}
          styles={{
            content: {
              borderTopLeftRadius: "50px",
              borderBottomRightRadius: "50px",
            },
          }}
        >
          <ModalMenu />
        </Modal>
        <Flex
          className="header-logo"
          justifyContent="center"
          alignItems="align-center"
        >
          <img src={logoVertical} alt="logo-vertical" />
        </Flex>
        <Flex
          className="header-nav"
          justifyContent="center"
          alignItems="align-center"
        >
          <p>Связаться</p>
          <Burger
            lineSize={2}
            size="xl"
            h={"1px"}
            opened={opened}
            onClick={open}
            aria-label="Toggle navigation"
          />
        </Flex>
      </header>
      <header className="desktop-header">
        <Flex
          className="header-logo"
          justifyContent="center"
          alignItems="align-center"
        >
          <img src={logoHorizontal} alt="logo-vertical" />
        </Flex>
        <Flex
          className="header-nav"
          justifyContent="center"
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
              <li>
                <NavLink to={ROUTES.CONTACTS}>Контакты</NavLink>
              </li>
            </ul>
          </nav>
          <p>Связаться</p>
        </Flex>
      </header>
    </>
  );
};
