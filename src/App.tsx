import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Contacts } from "./pages/Contacts";
import Home from "./pages/Home";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route path="/" element={Home} />
          <Route path="/about" element={} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
