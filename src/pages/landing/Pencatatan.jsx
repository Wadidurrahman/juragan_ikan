import Background from "../../assets/Asetpencatatan/pencatatan.png";
import Ikan from "../../assets/Asetpencatatan/icon ikan.png";
import Pakan from "../../assets/Asetpencatatan/icon pakan.png";
import Penjualan from "../../assets/Asetpencatatan/icon penjualan.png";

export default function Pencatatan() {
  return (
    <>
      <main>
        <div className="relative lg:h-screen lg:items-start items-center mb-4">
          <img className="w-full h-[20rem] object-cover" src={Background} alt="Background" />
        </div>
        <article className="relative flex flex-col lg:justify-center lg:items-center lg:text-center sm:items-center sm:text-center lg:-top-[15rem] sm:top-[15rem] mb-10 lg:mb-20">
          <h2 className="font-semibold mb-4 px-5">Sudahkah Anda mencatat kegiatan peternakan ikan hari ini?</h2>
          <p className="text-md text-center">
            Pencatatan yang cermat membantu peternak dalam mengambil keputusan tepat <br />
            untuk meningkatkan produktivitas dan memastikan kesejahteraan ikan
          </p>
        </article>
        <div className="relative flex flex-col lg:flex-row justify-center items-center h-full lg:-top-[10rem] gap-6 lg:gap-12 sm:mt-5">
          <div className="flex flex-col lg:flex-row justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md space-y-4 lg:space-y-0 lg:space-x-4">
            <img className="w-36 h-36 rounded-full" src={Ikan} alt="im-card" />
            <div className="justify-center items-center text-center lg:text-left">
              <h2 className="text-[#224D54] font-bold pb-4">Data Ikan</h2>
              <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300 text-white font-bold text-sm p-2 px-5 rounded-full">
                <a href="/Pencatatanikan">Catat</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md space-y-4 lg:space-y-0 lg:space-x-4">
            <img className="w-36 h-36 rounded-full" src={Pakan} alt="im-card" />
            <div className="justify-center items-center text-center lg:text-left">
              <h2 className="text-[#224D54] font-bold pb-4">Data Pakan</h2>
              <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300 text-white font-bold text-sm p-2 px-5 rounded-full">
                <a href="/pencatatanpakan">Catat</a>
              </button>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md space-y-4 lg:space-y-0 lg:space-x-4 mb-5">
            <img className="w-36 h-36 rounded-full" src={Penjualan} alt="im-card" />
            <div className="justify-center items-center text-center lg:text-left">
              <h2 className="text-[#224D54] font-bold pb-4">Data Penjualan</h2>
              <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300 text-white font-bold text-sm p-2 px-5 rounded-full">
                <a href="/Pencatatanpenjualan">Catat</a>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
