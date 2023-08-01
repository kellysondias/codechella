import { Route, Router } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";

export default function AppRouter() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Home />}></Route>
      </Router>
      <Footer />
    </>
  );
}
