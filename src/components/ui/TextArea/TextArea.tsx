import { ReactElement } from "react";
import "./style.scss";

interface ITextAreaProps {
  placeholder: string;
}

export const TextArea: React.FC<ITextAreaProps> = ({
  placeholder,
}): ReactElement => {
  return <textarea placeholder={placeholder} />;
};
