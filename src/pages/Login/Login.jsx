import React, { useState } from "react";
import { Lele } from "../../assets/img/lele";
import ICON_FB from "../../assets/icon/fb.svg";
import APPLE from "../../assets/icon/apple.svg";
import GOOGLE from "../../assets/icon/google.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { GoogleLogin } from "@react-oauth/google";
import { FacebookLogin } from "@react-oauth/facebook";
import { AppleLogin } from "@react-oauth/apple";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8000/login", { email, password });

      if (response.data.success) {
        const { token, user } = response.data.data;
        localStorage.setItem("accessToken", token);
        console.log("Login successful:", user);
        navigate("/homepage");
      } else {
        console.log("Login failed");
      }
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleGoogleLoginSuccess = (response) => {
    console.log("Google login success:", response);
  };

  const handleFacebookLoginSuccess = (response) => {
    console.log("Facebook login success:", response);
  };

  const handleAppleLoginSuccess = (response) => {
    console.log("Apple login success:", response);
  };

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
            <span className="text-left block text-sm font-bold text-slate-700">Email</span>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 px-2 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-ms focus:ring-1"
              placeholder="Your email@example.com"
            />
          </label>
          <label className="block mt-1">
            <span className="text-left block text-sm font-bold text-slate-700">Kata Sandi</span>
            <div className="relative mt-1">
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 px-2 py-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="Masukkan kata sandi"
              />
              <span className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer">
                <i id="togglepassword" className="fa fa-eye"></i>
              </span>
            </div>
          </label>
          <button
            type="submit"
            disabled={!email || !password || !isChecked}
            className={`py-4 w-[30rem] text-xs uppercase tracking-wider font-bold text-white bg-gray-300 rounded-md shadow-md transition duration-300 ease-in-out cursor-pointer focus:outline-none ${
              !email || !password || !isChecked ? "" : "bg-teal-800 hover:bg-teal-900 active:bg-teal-700"
            } mt-5`}
          >
            Masuk
          </button>
        </form>
        <h4 className="no-underline hover:underline text-sm mt-2 text-right cursor-pointer text-green-700">Lupa Kata Sandi?</h4>
        <h4 className="text-left text-sm">Masuk menggunakan</h4>
        <div className="flex gap-10 justify-center items-center">
          <GoogleLogin onSuccess={handleGoogleLoginSuccess} onFailure={(response) => console.error("Google login failed:", response)} />
          <FacebookLogin
            appId="YOUR_FACEBOOK_APP_ID"
            callback={handleFacebookLoginSuccess}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300 cursor-pointer">
                <img src={ICON_FB} className="w-6 rounded-sm " alt="Facebook" />
              </button>
            )}
          />
          <AppleLogin
            clientId="YOUR_APPLE_CLIENT_ID"
            redirectURI="YOUR_REDIRECT_URI"
            onSuccess={handleAppleLoginSuccess}
            onFailure={(response) => console.error("Apple login failed:", response)}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="justify-center items-center mt-3 rounded-lg px-8 py-1 border border-gray-300 cursor-pointer">
                <img src={APPLE} className="w-6 rounded-sm " alt="Apple" />
              </button>
            )}
          />
        </div>
        <hr className="mt-3 border-t border-gray-300" />
        <div className="items-left flex mt-3">
          <input type="checkbox" id="myCheckbox" className="form-checkbox h-4 w-5 text-blue-600" checked={isChecked} onChange={handleCheckboxChange} />
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
