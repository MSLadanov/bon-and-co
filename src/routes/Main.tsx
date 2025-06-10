import { OurServices } from "@components/OurServices";
import { Welcome } from "@components/Welcome";
import { ReactElement } from "react";

export const Main = (): ReactElement => {
  return <main>
    <Welcome/>
    <OurServices/>
  </main>;
};
