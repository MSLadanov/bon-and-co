import { ReactElement } from "react";
import "./style.scss";

interface IContactCardProps {
  title: string;
  contact: string;
  type: "phone" | "telegram" | "whatsapp";
}

export const ContactCard: React.FC<IContactCardProps> = ({
  title,
  contact,
  type,
}): ReactElement => {
  const getContactLink = () => {
    switch (type) {
      case "phone":
        return <a href={`tel:${contact}`}>{contact}</a>;
      case "telegram":
        return <a href={`https://t.me/${contact}`} target="_blank" rel="noopener noreferrer">{contact}</a>;
      case "whatsapp":
        return <a href={`https://wa.me/${contact}`} target="_blank" rel="noopener noreferrer">{contact}</a>;
      default:
        return <span>{contact}</span>;
    }
  };

  return (
    <div className="contact-card">
      <div className="contact-card__header">{title}</div>
      <div className="contact-card__body">{getContactLink()}</div>
    </div>
  );
};