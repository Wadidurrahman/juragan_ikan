import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login";
import Registerasi from "./pages/Login/Registerasi";
import Profile from "./pages/landing/Profile";
import Akun from "./pages/landing/Akun";
import Pencatatan from "./pages/landing/Pencatatan";
import Pencatatnikan from "./pages/landing/Pencatatanikan";
import Pencatatanpakan from "./pages/landing/Pencatatanpakan";
import Pencatatanpenjualan from "./pages/landing/Pecatatanpenjualan";
import Kebijakanprivasi from "./pages/landing/Kebijakanprivasi";
import Inputikan from "./components/Inputikan";
import Inputpakan from "./components/Inputpakan";
import Inputpenjualan from "./components/Inputpenjualan";
import Forum from "./pages/landing/Forum";
import Footer from "./components/header/Footer";
import Header from "./components/header/Header";

function LayoutWithFooter({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registerasi" element={<Registerasi />} />
        <Route
          path="*"
          element={
            <LayoutWithFooter>
              <Routes>
                <Route path="/profile" element={<Profile />} />
                <Route path="/akun" element={<Akun />} />
                <Route path="/pencatatan" element={<Pencatatan />} />
                <Route path="/pencatatanikan" element={<Pencatatnikan />} />
                <Route path="/pencatatanpakan" element={<Pencatatanpakan />} />
                <Route path="/pencatatanpenjualan" element={<Pencatatanpenjualan />} />
                <Route path="/inputikan" element={<Inputikan />} />
                <Route path="/inputpakan" element={<Inputpakan />} />
                <Route path="/inputpenjualan" element={<Inputpenjualan />} />
                <Route path="/kebijakanprivasi" element={<Kebijakanprivasi />} />
                <Route path="/forum" element={<Forum />} />
              </Routes>
            </LayoutWithFooter>
          }
        />
      </Routes>
    </Router>
  );
}
