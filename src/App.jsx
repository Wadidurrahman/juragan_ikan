import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login";
import Registerasi from "./pages/Login/Registerasi";
import Landingpage from "./pages/landing/Landingpage";
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
import Faq from "./pages/landing/Faq";
import Tabel1 from "./components/aset-faq/Tabel1";
import Tabel2 from "./components/aset-faq/Tabel2";
import Tabel3 from "./components/aset-faq/Tabel3";
import Tabel4 from "./components/aset-faq/Tabel4";
import Tabel5 from "./components/aset-faq/Tabel5";
import Tabel6 from "./components/aset-faq/Tabel6";
import Tabel7 from "./components/aset-faq/Tabel7";
import Popupeditfoto from "./components/Popupeditfoto";
import Notification from "./components/header/Notification";
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
                <Route path="/landingpage" element={<Landingpage />} />
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
                <Route path="/faq" element={<Faq />} />
              </Routes>
            </LayoutWithFooter>
          }
        />
      </Routes>
    </Router>
  );
}
