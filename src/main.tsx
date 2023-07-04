import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <>
      <Header />
      <Home />
      <Footer />
    </>
  </React.StrictMode>
);
