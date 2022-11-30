import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const LazyContacts = React.lazy(() => import("./pages/Contacts"));
const LazyCatalog = React.lazy(() => import("./pages/Catalog"));
const LazyCart = React.lazy(() => import("./pages/Cart"));
const LazySignUp = React.lazy(() => import("./pages/SignUp"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/catalog"
            element={
              <React.Suspense fallback="Loading...">
                <LazyCatalog />
              </React.Suspense>
            }
          />
          <Route
            path="/contacts"
            element={
              <React.Suspense fallback="Loading...">
                <LazyContacts />
              </React.Suspense>
            }
          />
          <Route
            path="/cart"
            element={
              <React.Suspense fallback="Loading...">
                <LazyCart />
              </React.Suspense>
            }
          />
          <Route
            path="/signUp"
            element={
              <React.Suspense fallback="Loading...">
                <LazySignUp />
              </React.Suspense>
            }
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
