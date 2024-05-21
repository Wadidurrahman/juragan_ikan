import SAMPUL from "../../assets/sampul.png";
import PROFIL from "../../assets/profil.webp";
import { FaPlusCircle } from "react-icons/fa";

export default function Profile() {
  return (
    <>
      <div className="relative">
        <main className="relative py-40">
          <div className="absolute top-[-150px] left-0 w-full z-0">
            <img className="object-cover" src={SAMPUL} alt="Sampul" />
            <h1 className="font-bold text-5xl poppins shadow-lg text-white relative bottom-80 justify-center text-center">My Profile</h1>
          </div>
          <div className="relative rounded-full px-10 top-[23rem] ">
            <img className=" absolute rounded-full h-48 w-48 border-4 shadow-sm" src={PROFIL} alt="" />
            <span className="relative ">
              <FaPlusCircle size={24} className="bg-white rounded-full absolute top-36 fill-[#224D54] left-[9.5rem] justify-end items-end" />
            </span>
          </div>
        </main>
        <div className="w-full mx-auto mt-4 bg-white p-8 py-[26rem] border-gray-300 flex justify-between ">
          <div className="w-full border-2 rounded-lg p-8 bottom-20">
            <h4 className="mt-5 py-5 font-bold text-2xl">Informasi Pribadi</h4>
            <form action="" className="grid grid-cols-4 gap-4">
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Nama depan</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-1 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Nama Belakang</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Alamat Email</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">No.Handphone</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Bio</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Pekerjaan</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Kota</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Provensi</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Negara</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200"></input>
              </div>
              <div className="col-span-2">
                <label className="text-sm font-bold text-gray-400 block">Kode Pos</label>
                <input type="text" className="w-full p-2 border border-gray-300 rounded mt-2 bg-gray-200 "></input>
              </div>
              <div className="flex gap-2">
                <bottom className="px-6 py-1.5 bg-[#9B9B9B] hover:bg-[#F9841A] rounded-lg cursor-pointer transition-all duration-300">Batal</bottom>
                <bottom className="px-6 py-1.5  bg-[#9B9B9B] hover:bg-[#F9841A] rounded-lg transition-all duration-300">Simpan</bottom>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
