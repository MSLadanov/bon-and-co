import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "@/App";
import "./globals.scss";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import { About } from "./routes/About";
import { Contacts } from "./routes/Contacts";
import { Gallery } from "./routes/Gallery";
import { Main } from "./routes/Main";
import { Reviews } from "./routes/Reviews";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/main" replace />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="main" element={<Main />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/main" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
