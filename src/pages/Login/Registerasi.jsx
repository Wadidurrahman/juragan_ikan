import React, { useState, useEffect } from "react";
import ICON_FB from "../../assets/icon/fb.svg";
import APPLE from "../../assets/icon/apple.svg";
import GOOGLE from "../../assets/icon/google.svg";
import COVER_IMAGE from "../../assets/img/lele.png";
import { Link } from "react-router-dom";

export default function Registerasi() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const namaLengkap = e.target.namalengkap.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!namaLengkap || !email || !password) {
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000);
      return;
    }
    window.location.href = "login";
  };

  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  return (
    <div className="container min-h-screen items-center  py-15 px-10 grid grid-cols-2 gap-20 justify-between ">
      <div className="text-center relative left-10 px-10 py-5">
        <p className="text-xl font-bold mt-5">Selamat Datang di Juragan</p>
        <div className="flex justify-center items-center text-sm mt-2">
          <p> Sudah Punya Akun ?</p>
          <a href="/login" className=" text-green-700 px-1 font-bold cursor-pointer ">
            Masuk
          </a>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mt-1">
            <span className="text-left after:content-['*'] after:ml-0.10 after:text-red-500 block font-bold text-sm text-slate-700">Nama Lengkap</span>
            <input
              type="text"
              name="namalengkap"
              className="mt-1 px-2 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-ms focus:ring-1"
              placeholder="Masukkan Nama Lengkap"
            />
          </label>
          <label onSubmit={handleSubmit} className="block mt-1">
            <span className="text-left after:content-['*'] after:ml-0.10 after:text-red-500 block font-bold text-sm text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              className="mt-1 px-2 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-ms focus:ring-1"
              placeholder="Your email@example.com"
            />
          </label>
          <label className="block mt-1">
            <span className="text-left after:content-['*'] after:ml-0.10 after:text-red-500 block font-bold text-sm text-slate-700">Kata Sandi</span>
            <input
              type="password"
              name="password"
              className="mt-1 px-2 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Masukkan kata sandi"
            />
          </label>
          {showNotification && (
            <div className="fixed z-50 flex top-[1rem] left-32 justify-center items-center">
              <div className="bg-red-100 border border-red-400 text-red-700 px-12 py-3 rounded relative" role="alert">
                <strong className="font-bold">Oops!</strong>
                <span className="block sm:inline"> Harap isi semua bidang sebelum melanjutkan.</span>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="py-4 w-[30rem] text-xs uppercase tracking-wider font-bold text-white  bg-gray-300 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-teal-800 hover:text-white hover:shadow-lg active:translate-y-1 mt-5"
          >
            Masuk
          </button>
        </form>
        <div className="items-left flex mt-5">
          <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-5 text-blue-600" />
          <h6 className="text-xs items-center px-2">
            Dengan melanjutkan kamu menerima <span className="font-bold text-green-700 underline cursor-pointer">Kebijakan Privasi</span> kami.
          </h6>
        </div>
        <div className="flex gap-10 justify-center items-center mt-4">
          <div className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300">
            <img src={ICON_FB} className="w-6 rounded-sm " alt="Facebook" />
          </div>
          <div className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300">
            <img src={GOOGLE} className="w-6 rounded-sm " alt="Google" />
          </div>
          <div className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300">
            <img src={APPLE} className="w-6 rounded-sm " alt="Apple" />
          </div>
        </div>
      </div>
      <div className="relative bottom-60 right-[-8px] rounded-lg justify-end">
        <img src={COVER_IMAGE} className="absolute rounded-xl w-[280%] h-[30rem] object-cover" />
      </div>
    </div>
  );
}
