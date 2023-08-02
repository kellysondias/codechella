import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import Experience from "./pages/Experience";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="experiencia" element={<Experience />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}
