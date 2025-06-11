import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IButtonProps {
  children: ReactNode;
  className?: "black" | "transparent";
}

export const Button: React.FC<IButtonProps> = ({
  children,
  className = "transparent",
}): ReactElement => {
  return <button className={className}>{children}</button>;
};
