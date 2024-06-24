import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login";
import Registerasi from "./pages/Login/Registerasi";
import Landingpage from "./pages/landing/Landingpage";
import Homepage from "./pages/landing/Homepage";
import Aboutus from "./pages/landing/Aboutus";
import Profile from "./pages/landing/Profile";
import Akun from "./pages/landing/Akun";
import Pencatatan from "./pages/landing/Pencatatan";
import Statistik from "./pages/landing/Statistik";
import Panduan from "./pages/landing/Panduan";
import Halartikel from "./pages/landing/Halartikel";
import Pencatatnikan from "./pages/landing/Pencatatanikan";
import Pencatatanpakan from "./pages/landing/Pencatatanpakan";
import Pencatatanpenjualan from "./pages/landing/Pecatatanpenjualan";
import Kebijakanprivasi from "./pages/landing/Kebijakanprivasi";
import Inputikan from "./components/Inputikan";
import Inputpakan from "./components/Inputpakan";
import Inputpenjualan from "./components/Inputpenjualan";
import Forum from "./pages/landing/Forum";
import Faq from "./pages/landing/Faq";
import Footer from "./components/header/Footer";
import Header from "./components/header/Header";

function LayoutWithFooter({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
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
        <Route path="/" element={<Landingpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route
          path="*"
          element={
            <LayoutWithFooter>
              <Routes>
                <Route path="/aboutus" element={<Aboutus />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/akun" element={<Akun />} />
                <Route path="/pencatatan" element={<Pencatatan />} />
                <Route path="/statistik" element={<Statistik />} />
                <Route path="/panduan" element={<Panduan />} />
                <Route path="/halartikel" element={<Halartikel />} />
                <Route path="/pencatatanikan" element={<Pencatatnikan />} />
                <Route path="/pencatatanpakan" element={<Pencatatanpakan />} />
                <Route path="/pencatatanpenjualan" element={<Pencatatanpenjualan />} />
                <Route path="/inputikan" element={<Inputikan />} />
                <Route path="/inputpakan" element={<Inputpakan />} />
                <Route path="/inputpenjualan" element={<Inputpenjualan />} />
                <Route path="/kebijakanprivasi" element={<Kebijakanprivasi />} />
                <Route path="/forum" element={<Forum />} />
                <Route path="/faq" element={<Faq />} />
              </Routes>
            </LayoutWithFooter>
          }
        />
      </Routes>
    </Router>
  );
}
