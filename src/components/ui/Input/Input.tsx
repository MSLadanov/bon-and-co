import { ReactElement } from "react";
import "./style.scss";

interface IInputProps {
    placeholder: string
}

export const Input : React.FC<IInputProps> = ({placeholder}): ReactElement => {
  return <input placeholder={placeholder} />;
};
