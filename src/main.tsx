import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { About } from "./routes/About";
import { Contacts } from "./routes/Contacts";
import { Gallery } from "./routes/Gallery";
import { Main } from "./routes/Main";
import { Reviews } from "./routes/Reviews";
import { MantineProvider } from "@mantine/core";
import { ROUTES } from '@routes/constants'
import "./globals.scss";
import '@mantine/core/styles.css';
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Navigate to="/main" replace />} />
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route path={ROUTES.CONTACTS} element={<Contacts />} />
            <Route path={ROUTES.GALLERY} element={<Gallery />} />
            <Route path={ROUTES.MAIN} element={<Main />} />
            <Route path={ROUTES.REVIEWS} element={<Reviews />} />
            <Route path="*" element={<Navigate to="/main" replace />} />
          </Route>
        </Routes>
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
