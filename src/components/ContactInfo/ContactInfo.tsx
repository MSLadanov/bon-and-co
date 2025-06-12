import { ReactElement } from "react";
import { Flex } from "@ui/Flex";
import { ContactCard } from "../ui/ContactCard";
import "./style.scss";

export const ContactInfo = (): ReactElement => {
  return (
    <Flex className="contact-info" flexDirection="column" alignItems="align-center">
      <Flex className="contact-info__text" flexDirection="column" alignItems="align-center">
        <h1>Контакты</h1>
        <p>
          Свяжитесь с нами, чтобы узнать больше о наших услугах или записаться
          на консультацию.
        </p>
      </Flex>
      <ContactCard title="Телефон" contact="8 961 524 53 21" type="phone" />
      <ContactCard title="Телеграм" contact="EvgenBondare8" type="telegram" />
    </Flex>
  );
};
