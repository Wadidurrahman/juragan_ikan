import React, { useEffect, useState } from "react";
import SAMPUL from "../../assets/sampul.png";
import PROFIL from "../../assets/profil.webp";
import { FaPlusCircle } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { IoImageOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import "aos/dist/aos.css";
import AOS from "aos";

const PopupEditFoto = ({ onClose }) => {
  const handleFileChange = (e) => {
    onClose();
  };

  return (
    <div className="absolute lg:left-[9.5rem]   w-80 rounded-xl shadow-lg z-10">
      <div className="bg-[#224D54] p-4 flex items-center rounded-t-xl relative">
        <h6 className="text-xl font-semibold text-white mx-auto">Edit Foto</h6>
        <button className="absolute right-4 text-white " onClick={onClose}>
          <RxCross2 size={24} />
        </button>
      </div>

      <div className="p-5 bg-white rounded-lg">
        <div className="flex items-center mb-4 px-2 hover:bg-slate-100 rounded-lg">
          <label htmlFor="fileInput" className="text-black flex items-center cursor-pointer hover:text-gray-400">
            <input type="file" id="fileInput" accept="image/*" className="hidden " onChange={handleFileChange} />
            <IoImageOutline size={24} />
            <h6 className="text-sm ml-4">Pilih Foto Profile</h6>
          </label>
        </div>
        <div className="flex items-center mb-4 py-2 px-2 hover:bg-slate-100 rounded-md">
          <button className="text-black flex items-center hover:text-gray-400" onClick={onClose}>
            <IoImageOutline size={24} />
            <h6 className="text-sm ml-4">Pilih Foto Sampul</h6>
          </button>
        </div>
        <hr />
        <div className="flex items-center mb-4 py-2 px-2 hover:bg-slate-100 rounded-md">
          <button className="text-black hover:text-[red] flex items-center" onClick={onClose}>
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
    <>
      <div className="relative">
        <main className="relative">
          <div className="relative lg:h-screen lg:items-start">
            <img className="w-full sm:h-[20rem] lg:h-[25rem] object-cover" src={SAMPUL} alt="Sampul" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <h1 className="font-bold text-5xl poppins text-white lg:text-center">My Profile</h1>
              <div className="relative mt-2  lg:right-[28rem]">
                <img className="rounded-full lg:h-48 lg:w-48 sm:h-36 sm:w-36 border-4 shadow-sm " src={PROFIL} alt="Profil" />
                <button className="absolute top-36 left-[9.5rem]" onClick={togglePopup}>
                  <FaPlusCircle size={24} className="bg-white rounded-full fill-[#224D54]" />
                </button>
                {isPopupVisible && <PopupEditFoto onClose={togglePopup} />}
              </div>
            </div>
          </div>
        </main>

        <div className="w-full bg-white px-8 border-gray-300 flex justify-between mt-20  ">
          <div className="w-full border-2 rounded-lg p-8 bottom-20">
            <h4 className="mt-5 py-5 font-bold text-2xl">Informasi Pribadi</h4>
            <form action="" className="grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Nama depan</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-200" />
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Nama Belakang</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200" />
              </div>
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">Alamat Email</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>{" "}
              </div>{" "}
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">No.Handphone</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>{" "}
              </div>{" "}
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">Bio</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>{" "}
              </div>{" "}
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">Pekerjaan</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>{" "}
              </div>{" "}
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">Kota</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>{" "}
              </div>{" "}
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">Provensi</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>{" "}
              </div>{" "}
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">Negara</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>{" "}
              </div>{" "}
              <div className="col-span-2">
                {" "}
                <label className="text-sm font-bold text-gray-400 block">Kode Pos</label> <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200 "></input>{" "}
              </div>
              {/* Sisanya input submit */}
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/akun";
                  }}
                  className="px-6 py-1.5 bg-[#9B9B9B] hover:bg-[#f91a1a] rounded-lg cursor-pointer transition-all duration-300"
                >
                  Batal
                </button>

                <button
                  type="button"
                  onClick={() => {
                    window.location.href = "/akun";
                  }}
                  className="px-6 py-1.5 hover:bg-[#ef6525] bg-[#F9841A] rounded-lg transition-all duration-300 cursor-pointer"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
