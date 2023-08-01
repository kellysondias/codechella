import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import "./index.css";
// import AppRouter from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <Header />
      <Home />
      <Footer />
      {/* <AppRouter /> */}
    </>
  </React.StrictMode>
);
