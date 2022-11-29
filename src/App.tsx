import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacts } from "./pages/Contacts";
import Home from "./pages/Home";
import { Header } from "./components/Header";
import { Catalog } from "./pages/Catalog";
import { Cart } from "./pages/Cart";
import { SignUp } from "./pages/SignUp";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/signUp" element={<SignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
