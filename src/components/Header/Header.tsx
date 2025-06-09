import { ReactElement } from "react";
import { Flex } from "@ui/Flex";
import logoVertical from "@assets/logo/logo-vertical.png";
import { Burger, Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { ModalMenu } from "@components/ModalMenu";
import "./style.scss";

export const Header = (): ReactElement => {
  const [opened, { open, close }] = useDisclosure();
  return (
    <header>
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
          lineSize={4}
          size="xl"
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation"
        />
      </Flex>
    </header>
  );
};
