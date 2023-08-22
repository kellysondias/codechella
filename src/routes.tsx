import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Main from "./pages/Main";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import MapPage from "./pages/MapPage";
import Information from "./pages/Information";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Main />}>
            <Route index element={<Home />} />
            <Route path="experiencia" element={<Experience />} />
            <Route path="mapa-de-setores" element={<MapPage />} />
            <Route path="informacoes" element={<Information />} />
          </Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
