import COVER_IMAGE from "../../assets/img_login.jpg";
import React from "react";
import ICON_FB from "../../assets/icon/fb.svg";
import APPLE from "../../assets/icon/apple.svg";
import GOOGLE from "../../assets/icon/google.svg";

export default function Login() {
  return (
    /* Ini adalah page login */
    /* start */
    <div className="container min-h-screen items-center  py-20 px-10 grid grid-cols-2 gap-20 justify-between">
      <div className="text-center relative left-16 px-10 py-5">
        <p className="text-lg font-bold mt-5">SELAMAT DATANG DI JURAGAN IKAN</p>
        <p className="text-xs mt-3">
          Baru dijuragan ikan? <span className=" no-underline hover:underline text-green-700 font-bold cursor-pointer">Daftar Gratis</span>
        </p>
        <label class="block mt-1">
          <span class="text-left after:content-['*'] after:ml-0.10 after:text-red-500 block text-sm font-medium text-slate-500">Email</span>
          <input
            type="email"
            name="email"
            class="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-ms focus:ring-1"
            placeholder="Your email@example.com"
          />
        </label>
        <label class="block mt-1">
          <span
            class="text-left after:content-['*'] after:ml-0.10
          after:text-red-500 block text-sm font-medium text-slate-700"
          >
            Kata Sandi
          </span>
          <input
            type="password"
            name="password"
            class="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Masukkan kata sandi"
          />
        </label>
        <button class="py-[2%] px-[44%] text-xs uppercase tracking-wider font-bold text-white  bg-gray-300 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none hover:bg-teal-800 hover:text-white hover:shadow-lg active:translate-y-1 mt-5">
          Masuk
        </button>
        <h4 className=" no-underline hover:underline text-sm mt-2 text-right cursor-pointer text-green-700">Lupa Kata Sandi?</h4>
        <h4 className="text-left text-sm">Masuk menggunakan</h4>
        <div className="flex gap-10 justify-center items-center">
          <div className="justify-center items-center mt-3  rounded-lg px-8 py-1 border border-gray-300">
            <img src={ICON_FB} className=" w-6   rounded-sm " />
          </div>
          <div className="justify-center items-center mt-3  rounded-lg px-8 py-1 border border-gray-300">
            <img src={GOOGLE} className=" w-6   rounded-sm " />
          </div>
          <div className="justify-center items-center mt-3  rounded-lg px-8 py-1 border border-gray-300">
            <img src={APPLE} className=" w-6   rounded-sm " />
          </div>
        </div>
        <hr class="mt-3 border-t border-gray-300" />
        <div className="items-left flex mt-3">
          <input type="checkbox" id="myCheckbox" class="form-checkbox h-4 w-5 text-blue-600" />
          <label for="myCheckbox" className="ml-1 text-sm text-gray-500">
            Ingatkan saya
          </label>
        </div>
        <hr class="mt-2 border-t border-gray-300" />
        <h6 className="text-xs items-center mt-5">
          Dengan melanjutkan kamu menerima <span className="font-bold text-green-700 underline cursor-pointer">Kebijakan Privasi</span> kami.
        </h6>
      </div>
      <div className="relative px-12 bottom-60 right-[-20px] rounded-lg justify-end">
        <img src={COVER_IMAGE} className="absolute rounded-xl w-[280%] h-[30rem] object-cover" />
      </div>
    </div>
  );
}
