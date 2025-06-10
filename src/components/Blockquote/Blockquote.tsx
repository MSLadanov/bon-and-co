import { Paper } from "@mantine/core";
import { Flex } from "../ui/Flex";
import { ReactElement, ReactNode } from "react";
import "./style.scss";

interface IBlockquoteProps {
  children: ReactNode;
  withQuotes?: boolean;
  withBorders?: boolean;
}

export const Blockquote: React.FC<IBlockquoteProps> = ({
  children,
  withQuotes = false,
  withBorders = false,
}): ReactElement => {
  return (
    <Flex
      className="blockquote"
      justifyContent="center"
      alignItems="align-center"
    >
      <Paper
        className={`${withQuotes ? "with-quotes" : ""}  ${
          withBorders ? "with-borders" : ""
        }`}
        bg={"black"}
      >
        {children}
      </Paper>
    </Flex>
  );
};
