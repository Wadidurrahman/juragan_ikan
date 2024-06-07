import React, { useState, useEffect } from "react";
import { Lele } from "../../assets/img/lele";
import ICON_FB from "../../assets/icon/fb.svg";
import APPLE from "../../assets/icon/apple.svg";
import GOOGLE from "../../assets/icon/google.svg";
import { Link } from "react-router-dom";

export default function Login() {
  const [showNotification, setShowNotification] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (!email || !password) {
      setShowNotification(true);
      return;
    }

    window.location.href = "landingpage";
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
    <div className="container min-h-screen items-center py-15 px-10 grid grid-cols-2 gap-20 justify-between">
      <div className="text-center relative left-10 px-10 py-5">
        <p className="text-lg font-bold mt-5">Selamat Datang di Juragan Ikan</p>
        <div className="flex justify-center items-center text-sm mt-2">
          <p>Baru di Juragan Ikan ?</p>
          <Link to="/registerasi" className="text-green-700 font-bold cursor-pointer px-1">
            Daftar Gratis
          </Link>
        </div>
        <form onSubmit={handleSubmit}>
          <label className="block mt-1">
            <span className="text-left after:content-['*'] after:ml-0.10 after:text-red-500 block text-sm font-bold text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-ms focus:ring-1"
              placeholder="Your email@example.com"
            />
          </label>
          <label className="block mt-1">
            <span className="text-left after:content-['*'] after:ml-0.10 after:text-red-500 block text-sm font-bold text-slate-700">Kata Sandi</span>
            <div className="relative mt-1">
              <input
                type="password"
                name="password"
                className="mt-1 px-2 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Masukkan kata sandi"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <i id="togglepassword" className="fa fa-eye"></i>
              </span>
            </div>
          </label>
          {showNotification && (
            <div className="fixed z-50 flex -top-[16rem] left-36 items-center h-full">
              <div className="bg-red-100 border border-red-400 text-red-700 px-10 py-3 rounded relative" role="alert">
                <strong className="font-bold">Oops!</strong>
                <span className="block sm:inline"> Harap isi semua bidang sebelum melanjutkan.</span>
              </div>
            </div>
          )}
          <button
            type="submit"
            className="py-4 w-[30rem] text-xs uppercase tracking-wider font-bold text-white bg-gray-300 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-teal-800 hover:text-white hover:shadow-lg active:translate-y-1 mt-5"
            onClick={() => {
              window.location.href = "homepage";
            }}
          >
            Masuk
          </button>
        </form>
        <h4 className="no-underline hover:underline text-sm mt-2 text-right cursor-pointer text-green-700">Lupa Kata Sandi?</h4>
        <h4 className="text-left text-sm">Masuk menggunakan</h4>
        <div className="flex gap-10 justify-center items-center">
          <button className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300 cursor-pointer">
            <img src={ICON_FB} className="w-6 rounded-sm " alt="Facebook" />
          </button>
          <button className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300 cursor-pointer">
            <img src={GOOGLE} className="w-6 rounded-sm " alt="Google" />
          </button>
          <button className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300 cursor-pointer">
            <img src={APPLE} className="w-6 rounded-sm " alt="Apple" />
          </button>
        </div>
        <hr className="mt-3 border-t border-gray-300" />
        <div className="items-left flex mt-3">
          <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-5 text-blue-600" />
          <label htmlFor="myCheckbox" className="px-2 text-sm text-gray-500">
            Ingatkan saya
          </label>
        </div>
        <hr className="mt-2 border-t border-gray-300" />
        <h6 className="text-xs items-center mt-5">
          Dengan melanjutkan kamu menerima <span className="font-bold text-green-700 underline cursor-pointer">Kebijakan Privasi</span> kami.
        </h6>
      </div>
      <div className="relative bottom-60 right-[-8px] rounded-lg justify-end">
        <img src={Lele} className="absolute rounded-xl w-[280%] h-[30rem] object-cover" alt="Lele" />
      </div>
    </div>
  );
}
