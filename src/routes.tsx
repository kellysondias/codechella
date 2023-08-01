import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";

export default function AppRouter() {
  return (
    <>
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
      <Footer />
    </>
  );
}
