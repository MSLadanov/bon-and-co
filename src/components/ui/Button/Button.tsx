import { PropsWithChildren, ReactElement } from "react";
import './style.scss'

export const Button = ({ children }: PropsWithChildren): ReactElement => {
  return <button>{children}</button>;
};
