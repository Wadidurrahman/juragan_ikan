import Background from "../../assets/Asetpencatatan/pencatatan.png";
import Ikan from "../../assets/Asetpencatatan/icon ikan.png";
import Pakan from "../../assets/Asetpencatatan/icon pakan.png";
import Penjualan from "../../assets/Asetpencatatan/icon penjualan.png";

export default function Pencatatan() {
  return (
    <>
      <main>
        <div className="">
          <img className="w-full" src={Background} alt="Background" />
        </div>
        <article className="relative flex flex-col justify-center items-center p-10 h-full">
          <h2 className="font-semibold text-3xl mb-4">Sudahkah Anda mencatat kegiatan peternakan ikan hari ini?</h2>
          <p className="text-md text-center">
            Pencatatan yang cermat membantu peternak dalam mengambil keputusan tepat <br />
            untuk meningkatkan produktivitas dan memastikan kesejahteraan ikan
          </p>
        </article>
        <div className="relative flex justify-center items-center h-full p-20 gap-2">
          <card className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md ">
            <div className="justify-center items-center">
              <h2 className="text-[#224D54] font-bold pb-10">Data Ikan</h2>
              <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                <a href="/Pencatatanikan">Catat</a>
              </button>
            </div>
            <img className="w-36 h-36 rounded-full" src={Ikan} alt="im-card" />
          </card>
          <card className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md ">
            <div className="justify-center items-center">
              <h2 className="text-[#224D54] font-bold pb-10">Data Pakan</h2>
              <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                {" "}
                <a href="/pencatatanpakan">Catat</a>
              </button>
            </div>
            <img className="w-36 h-36 rounded-full" src={Pakan} alt="im-card" />
          </card>
          <card className="flex justify-center items-center border-2 px-12 py-4 shadow-lg bg-white rounded-md ">
            <div className="justify-center items-center">
              <h2 className="text-[#224D54] font-bold pb-10">Data Penjualan</h2>
              <button className="bg-[#F9841A] hover:bg-slate-500 transition-all duration-300  text-white font-bold text-sm p-2 px-5 rounded-full">
                {" "}
                <a href="/Pencatatanpenjualan">Catat</a>
              </button>
            </div>
            <img className="w-36 h-36 rounded-full" src={Penjualan} alt="im-card" />
          </card>
        </div>
      </main>
    </>
  );
}
