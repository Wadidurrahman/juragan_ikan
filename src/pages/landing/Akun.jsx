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
          <div className="relative rounded-full items-center justify-center px-20 md:px-10 xl:top-[23rem] ">
            <img className=" absolute rounded-full h-48 w-48 border-4 shadow-sm" src={PROFIL} alt="" />
            <span className="relative ">
              <FaPlusCircle size={24} className="bg-white rounded-full absolute top-36 fill-[#224D54] left-[9.5rem] justify-end items-end" />
            </span>
          </div>
        </main>
        <section className="w-full mx-auto mt-4 bg-white px-8 pt-10 xl:pt-[28rem] border-gray-300 flex justify-between ">
          <div className="w-full border-2 rounded-lg p-8 bottom-20">
            <div className="flex gap-1 justify-between items-center">
              <div className="relative">
                <h4 className="text-[17px] font-bold py-3">Jamal bin jamal</h4>
                <h2 class="text-[17px] text-gray-500">Peternak Ikan Lele</h2>
                <address class="not-italic">
                  <p class="text-[17px] text-gray-500">Lawukmaru, Malang</p>
                </address>
              </div>
              <div className="relative bottom-5 top-[-20]">
                <buttom className="py-1 px-3 mt-10 bg-[#9B9B9B] hover:bg-[#F9841A] rounded-lg cursor-pointer transition-all duration-300">
                  <a href="/profile">Edit</a>
                </buttom>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full mx-auto mt-4 bg-white px-8 pt-[1rem] border-gray-300 flex justify-between ">
          <div className="w-full border-2 rounded-lg p-8 bottom-20">
            <h2 class="text-lg font-bold text-black py-3">Informasi Pribadi</h2>
            <article className="relative text-gray-500 grid grid-cols-4 gap-4 ">
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
        <section className="w-full mx-auto mt-4 bg-white px-8 py-8 mb-10 pt-[1rem] border-gray-300 flex justify-between ">
          <div className="w-full border-2 rounded-lg p-8 bottom-20">
            <h2 class="text-lg font-bold text-black py-3">Alamat</h2>
            <article className="relative text-gray-500 grid grid-cols-4 gap-4 ">
              <p className="flex flex-col col-span-2">
                <strong className="font-semibold">Negara</strong> Indonesia
              </p>
              <p className="flex flex-col col-span-2">
                <strong className="font-semibold">Kota</strong> Malang
              </p>
              <p className="flex flex-col col-span-2">
                <strong className="font-semibold">Provnsi</strong> jawa timur
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
    </>
  );
}
