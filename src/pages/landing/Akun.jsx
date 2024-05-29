import React, { useState } from "react";
import SAMPUL from "../../assets/sampul.png";
import PROFIL from "../../assets/profil.webp";
import { FaPlusCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoImageOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";

// Popup Component
const Popupeditfoto = ({ onClose }) => {
  return (
    <div className="absolute left-[9.5rem] bottom-[-24rem] w-80  rounded-xl shadow-lg z-10">
      <div className="bg-[#224D54] p-4 flex items-center rounded-t-xl relative">
        <h6 className="text-xl font-semibold text-white mx-auto">Edit Foto</h6>
        <button className="absolute right-4 text-white" onClick={onClose}>
          <RxCross2 size={24} />
        </button>
      </div>

      <div className="p-5 bg-white rounded-lg">
        <div className="flex items-center mb-4 px-2 hover:bg-slate-100 rounded-lg">
          <label htmlFor="fileInput" className="text-black-500 flex items-center cursor-pointer hover:text-gray-400">
            <input type="file" id="fileInput" accept="image/*" className="hidden " onChange={onClose} />
            <IoImageOutline size={24} />
            <h6 className="text-sm ml-4">Pilih Foto Profile</h6>
          </label>
        </div>
        <div className="flex items-center mb-4 py-2 px-2 hover:bg-slate-100 rounded-md">
          <button className="text-black-500 flex items-center hover:text-gray-400" onClick={onClose}>
            <IoImageOutline size={24} />
            <h6 className="text-sm ml-4">Pilih Foto Sampul</h6>
          </button>
        </div>
        <hr />
        <div className="flex items-center mb-4 py-2 px-2 hover:bg-slate-100 rounded-md">
          <button className="text-black-500 hover:text-[red] flex items-center" onClick={onClose}>
            <RiDeleteBin6Line size={24} />
            <h6 className="text-sm ml-4">Hapus</h6>
          </button>
        </div>
      </div>
    </div>
  );
};

// Profile Component
const Profile = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="relative">
      <main className="relative py-40">
        <div className="absolute top-[-360px] left-0 w-full z-0">
          <img className="object-cover" src={SAMPUL} alt="Sampul" />
          <h1 className="font-bold text-5xl poppins shadow-lg text-white relative bottom-60 justify-center text-center">My Profile</h1>
        </div>
        <div className="relative rounded-full items-center justify-center px-20 md:px-10 xl:top-[10rem]">
          <img className="absolute rounded-full h-48 w-48 border-4 shadow-sm" src={PROFIL} alt="Profil" />
          <div className="relative">
            <button className="relative" onClick={togglePopup}>
              <FaPlusCircle size={24} className="bg-white rounded-full absolute top-36 fill-[#224D54] left-[9.5rem] justify-end items-end" />
            </button>
            {/* Popup Component */}
            {isPopupVisible && <Popupeditfoto onClose={togglePopup} />}
          </div>
        </div>
      </main>

      <section className="w-full mx-auto mt-4 bg-white px-8 pt-10 xl:pt-[10rem] border-gray-300 flex justify-between">
        <div className="w-full border-2 rounded-lg p-8 bottom-20">
          <div className="flex gap-1 justify-between items-center">
            <div className="relative">
              <h4 className="text-[17px] font-bold py-3">Jamal bin Jamal</h4>
              <h2 className="text-[17px] text-gray-500">Peternak Ikan Lele</h2>
              <address className="not-italic">
                <p className="text-[17px] text-gray-500">Lawukmaru, Malang</p>
              </address>
            </div>
            <div className="relative bottom-5 top-[-20]">
              <button className="py-1 px-3 mt-10 bg-[#9B9B9B] hover:bg-[#F9841A] rounded-lg cursor-pointer transition-all duration-300">
                <a href="/profile">Edit</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mx-auto mt-4 bg-white px-8 pt-[1rem] border-gray-300 flex justify-between">
        <div className="w-full border-2 rounded-lg p-8 bottom-20">
          <h2 className="text-lg font-bold text-black py-3">Informasi Pribadi</h2>
          <article className="relative text-gray-500 grid grid-cols-4 gap-4">
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Nama Depan</strong> Jamal
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Nama Belakang</strong> bin Jamal
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Alamat Gmail</strong> jamal@example.com
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Nomor HP</strong> 08123456789
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Pekerjaan</strong> Peternak Ikan Lele
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Bio</strong> Saya adalah seorang peternak ikan lele dengan pengalaman lebih dari 10 tahun di bidang ini.
            </p>
          </article>
        </div>
      </section>

      <section className="w-full mx-auto mt-4 bg-white px-8 py-8 mb-10 pt-[1rem] border-gray-300 flex justify-between">
        <div className="w-full border-2 rounded-lg p-8 bottom-20">
          <h2 className="text-lg font-bold text-black py-3">Alamat</h2>
          <article className="relative text-gray-500 grid grid-cols-4 gap-4">
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Negara</strong> Indonesia
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Kota</strong> Malang
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Provinsi</strong> Jawa Timur
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Nomor HP</strong> 08123456789
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Pekerjaan</strong> Peternak Ikan Lele
            </p>
            <p className="flex flex-col col-span-2">
              <strong className="font-semibold">Bio</strong> Saya adalah seorang peternak ikan lele dengan pengalaman lebih dari 10 tahun di bidang ini.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Profile;
